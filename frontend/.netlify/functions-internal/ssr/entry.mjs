import { renderers } from './renderers.mjs';
import { manifest } from './manifest_mUa8u3DE.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_hVJbLhvv.mjs');
const _page1 = () => import('./chunks/studio-route_zyeuNFsg.mjs');
const _page2 = () => import('./chunks/404_Mt1tuUSX.mjs');
const _page3 = () => import('./chunks/about_KgE697jd.mjs');
const _page4 = () => import('./chunks/boots_KpQgYm5W.mjs');
const _page5 = () => import('./chunks/buddy_QlkxT00D.mjs');
const _page6 = () => import('./chunks/caezar_RR3enQL_.mjs');
const _page7 = () => import('./chunks/_slug__7SAPT6eA.mjs');
const _page8 = () => import('./chunks/index_zZODuThY.mjs');
const _page9 = () => import('./chunks/blog_3YvRPA06.mjs');
const _page10 = () => import('./chunks/contact_6IWv5473.mjs');
const _page11 = () => import('./chunks/dogs_V_qLgf5Q.mjs');
const _page12 = () => import('./chunks/donate_LNy-oDmj.mjs');
const _page13 = () => import('./chunks/get-involved_AFTlnB7E.mjs');
const _page14 = () => import('./chunks/resources_emJyuvdb.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.3.2_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/@sanity+astro@2.2.0_@sanity+client@6.12.4_astro@4.3.2_react-dom@18.2.0_react-is@18.2.0_react@_3wb2mrwp2ark4326db7gq26ehu/node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/about.astro", _page3],
    ["src/pages/animals/boots.md", _page4],
    ["src/pages/animals/buddy.md", _page5],
    ["src/pages/animals/caezar.md", _page6],
    ["src/pages/posts/[slug].astro", _page7],
    ["src/pages/index.astro", _page8],
    ["src/pages/blog.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/dogs.astro", _page11],
    ["src/pages/donate.astro", _page12],
    ["src/pages/get-involved.astro", _page13],
    ["src/pages/resources.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "e63acadf-c162-42a9-bf29-1f893f9decc6"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
