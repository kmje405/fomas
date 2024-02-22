import './chunks/astro_7FhlYrHw.mjs';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"animals/boots/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/animals/boots","isIndex":false,"type":"page","pattern":"^\\/animals\\/boots\\/?$","segments":[[{"content":"animals","dynamic":false,"spread":false}],[{"content":"boots","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/animals/boots.md","pathname":"/animals/boots","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"animals/buddy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/animals/buddy","isIndex":false,"type":"page","pattern":"^\\/animals\\/buddy\\/?$","segments":[[{"content":"animals","dynamic":false,"spread":false}],[{"content":"buddy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/animals/buddy.md","pathname":"/animals/buddy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"animals/caezar/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/animals/caezar","isIndex":false,"type":"page","pattern":"^\\/animals\\/caezar\\/?$","segments":[[{"content":"animals","dynamic":false,"spread":false}],[{"content":"caezar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/animals/caezar.md","pathname":"/animals/caezar","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"dogs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/dogs","isIndex":false,"type":"page","pattern":"^\\/dogs\\/?$","segments":[[{"content":"dogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dogs.astro","pathname":"/dogs","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"donate/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/donate","isIndex":false,"type":"page","pattern":"^\\/donate\\/?$","segments":[[{"content":"donate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/donate.astro","pathname":"/donate","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"get-involved/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/get-involved","isIndex":false,"type":"page","pattern":"^\\/get-involved\\/?$","segments":[[{"content":"get-involved","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/get-involved.astro","pathname":"/get-involved","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"resources/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resources","isIndex":false,"type":"page","pattern":"^\\/resources\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources.astro","pathname":"/resources","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.3.2_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.BjQWAsNO.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/admin/[...params]","pattern":"^\\/admin(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/.pnpm/@sanity+astro@2.2.0_@sanity+client@6.12.4_astro@4.3.2_react-dom@18.2.0_react-is@18.2.0_react@_3wb2mrwp2ark4326db7gq26ehu/node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/node_modules/.pnpm/@sanity+astro@2.2.0_@sanity+client@6.12.4_astro@4.3.2_react-dom@18.2.0_react-is@18.2.0_react@_3wb2mrwp2ark4326db7gq26ehu/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/src/pages/animals/boots.md",{"propagation":"none","containsHead":true}],["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/src/pages/dogs.astro",{"propagation":"none","containsHead":true}],["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/src/pages/animals/buddy.md",{"propagation":"none","containsHead":true}],["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/src/pages/animals/caezar.md",{"propagation":"none","containsHead":true}],["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/src/pages/donate.astro",{"propagation":"none","containsHead":true}],["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/src/pages/get-involved.astro",{"propagation":"none","containsHead":true}],["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/src/pages/posts/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/km/Documents/Work/Projects/fomas/fomas/frontend/src/pages/resources.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/.pnpm/astro@4.3.2_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_T7KUCfIq.mjs","/node_modules/.pnpm/@sanity+astro@2.2.0_@sanity+client@6.12.4_astro@4.3.2_react-dom@18.2.0_react-is@18.2.0_react@_3wb2mrwp2ark4326db7gq26ehu/node_modules/@sanity/astro/dist/studio/studio-route.astro":"chunks/pages/studio-route_IhFecA0H.mjs","\u0000@astrojs-manifest":"manifest_vvhcJRfi.mjs","/Users/km/Documents/Work/Projects/fomas/fomas/frontend/node_modules/.pnpm/@astrojs+react@3.0.10_@types+react-dom@18.2.19_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0_vite@5.0.12/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_7a5sIVmK.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.3.2_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CL25hAUR.mjs","\u0000@astro-page:node_modules/.pnpm/@sanity+astro@2.2.0_@sanity+client@6.12.4_astro@4.3.2_react-dom@18.2.0_react-is@18.2.0_react@_3wb2mrwp2ark4326db7gq26ehu/node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"chunks/studio-route_f8aCS241.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_FPlXJlee.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_7fdEjRxF.mjs","\u0000@astro-page:src/pages/animals/boots@_@md":"chunks/boots_4pCUwn-p.mjs","\u0000@astro-page:src/pages/animals/buddy@_@md":"chunks/buddy_J7CB9bh9.mjs","\u0000@astro-page:src/pages/animals/caezar@_@md":"chunks/caezar_FIt3gm_F.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"chunks/_slug__RSNCToLu.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_IodsCmak.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_lFvyI9uk.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_u4yzrwHl.mjs","\u0000@astro-page:src/pages/dogs@_@astro":"chunks/dogs_bbK10x_9.mjs","\u0000@astro-page:src/pages/donate@_@astro":"chunks/donate_Wr0V2pbm.mjs","\u0000@astro-page:src/pages/get-involved@_@astro":"chunks/get-involved_lZ1X99ru.mjs","\u0000@astro-page:src/pages/resources@_@astro":"chunks/resources_eZHoq3do.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.5HMSSKwJ.js","/Users/km/Documents/Work/Projects/fomas/fomas/frontend/node_modules/.pnpm/sanity@3.29.0_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0_styled-components@6.1.8/node_modules/sanity/lib/_chunks/resources-HZQaDS9-.js":"_astro/resources-HZQaDS9-.4It2ZfbX.js","/Users/km/Documents/Work/Projects/fomas/fomas/frontend/node_modules/.pnpm/sanity@3.29.0_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0_styled-components@6.1.8/node_modules/sanity/lib/_chunks/index-mZQe2RMW.js":"_astro/index-mZQe2RMW.oZGobwtf.js","@astrojs/react/client.js":"_astro/client.RV50O_G0.js","/Users/km/Documents/Work/Projects/fomas/fomas/frontend/node_modules/.pnpm/@sanity+astro@2.2.0_@sanity+client@6.12.4_astro@4.3.2_react-dom@18.2.0_react-is@18.2.0_react@_3wb2mrwp2ark4326db7gq26ehu/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.PqLtGd5Q.js","/Users/km/Documents/Work/Projects/fomas/fomas/frontend/node_modules/.pnpm/@sanity+client@6.12.4/node_modules/@sanity/client/dist/_chunks/stegaEncodeSourceMap-LDHMEOVo.js":"_astro/stegaEncodeSourceMap-LDHMEOVo.9HxD4vzY.js","/Users/km/Documents/Work/Projects/fomas/fomas/frontend/node_modules/.pnpm/sanity@3.29.0_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0_styled-components@6.1.8/node_modules/sanity/lib/_chunks/resources-7hAPJyyn.js":"_astro/resources-7hAPJyyn.UyXUYye_.js","/Users/km/Documents/Work/Projects/fomas/fomas/frontend/node_modules/.pnpm/sanity@3.29.0_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0_styled-components@6.1.8/node_modules/sanity/lib/_chunks/index-0LpTAOhF.js":"_astro/index-0LpTAOhF.5QSjmL4_.js","/Users/km/Documents/Work/Projects/fomas/fomas/frontend/node_modules/.pnpm/sanity@3.29.0_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0_styled-components@6.1.8/node_modules/sanity/lib/_chunks/index-c8Mnhnf1.js":"_astro/index-c8Mnhnf1.rp8RdDkI.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/studio-route.BjQWAsNO.css","/FOMASlogo_hWh.png","/doggy.jpeg","/doggy404.png","/favicon.svg","/kennel-construction.jpeg","/line-twTeal300.png","/line-twTeal300.svg","/pawPad.svg","/so-many-dogs.jpeg","/sophie1.jpg","/_astro/browser.b362YRuq.js","/_astro/client.-OEVpZ6O.js","/_astro/client.RV50O_G0.js","/_astro/index-0LpTAOhF.5QSjmL4_.js","/_astro/index-c8Mnhnf1.rp8RdDkI.js","/_astro/index-mZQe2RMW.oZGobwtf.js","/_astro/resources-7hAPJyyn.UyXUYye_.js","/_astro/resources-HZQaDS9-.4It2ZfbX.js","/_astro/stegaEncodeSourceMap-LDHMEOVo.9HxD4vzY.js","/_astro/studio-component.EcszUpEI.js","/_astro/studio-component.PqLtGd5Q.js","/404.html","/about/index.html","/animals/boots/index.html","/animals/buddy/index.html","/animals/caezar/index.html","/index.html","/blog/index.html","/contact/index.html","/dogs/index.html","/donate/index.html","/get-involved/index.html","/resources/index.html"],"buildFormat":"directory"});

export { manifest };
