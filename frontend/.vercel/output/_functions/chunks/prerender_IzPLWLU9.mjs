import { s as sanityClient } from './pages/studio-route_Mtk1qtOl.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute, j as renderHead, k as renderComponent, l as renderSlot, u as unescapeHTML } from './astro_FBk-KDt9.mjs';
/* empty css                         */

const $$Astro$j = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="flex flex-col sm:flex-row justify-between items-center py-2 bg-blue-600 text-white"> <div class="flex justify-between items-center w-full sm:w-auto px-8"> <img class="h-20" src="/FOMASlogo_hWh.png" alt="The official Friends of Mountainair Animal Shelter Logo"> <!-- Hamburger Icon --> <button id="hamburger" class="sm:hidden px-2 py-1"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg> </button> </div> <!-- Navigation Links --> <nav class=" px-8 hidden w-full sm:flex sm:items-center sm:w-auto" id="nav-menu"> <ul class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 p-4 sm:p-0"> <li><a href="/" class=" font-bold block hover:bg-blue-700 p-4 rounded text-center">Home</a></li> <li><a href="/about" class="font-bold block hover:bg-blue-700 p-4 rounded text-center">About</a></li> <li><a href="/blog" class="font-bold block hover:bg-blue-700 p-4 rounded text-center">Blog</a></li> <li><a href="/dogs" class="font-bold block hover:bg-blue-700 p-4 rounded text-center">Dogs</a></li> <li><a href="/get-involved" class="font-bold block hover:bg-blue-700 p-4 rounded text-center text-nowrap">Get Involved</a></li> <li><a href="/resources" class="font-bold block hover:bg-blue-700 p-4 rounded text-center">Resources</a></li> <li><a href="/donate" class="font-bold block hover:bg-blue-700 p-4 rounded text-center">Donate</a></li> <li><a href="/contact" class="font-bold block hover:bg-blue-700 p-4 rounded text-center">Contact</a></li> </ul> </nav> </header> `;
}, "/Users/oliverspeir/Code/fomas/frontend/src/components/Header.astro", void 0);

const mailingAddress = "P.O. Box 565, Mountainair, NM 87036";
const organizationFullName = "The Friends of Mountainair Animal Shelter";
const nonProfitStatus = "The Friends of Mountainair Animal Shelter is a 501c3 nonprofit.";

const $$Astro$i = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-blue-900 text-white pt-20 mt-20 pb-6 px-5 sm:pb-3 sm:pt-8"> <div class="max-w-7xl mx-auto flex flex-wrap items-start justify-between"> <!-- Beginning Section --> <div class="w-full sm:w-auto mb-6 sm:mb-0"> <p class="text-lg mb-2"> ${mailingAddress} </p> <p class="text-xl font-bold mb-2">
&copy; ${organizationFullName} </p> <p class="text-md italic"> ${nonProfitStatus} </p> </div> <!-- Links Section --> <div class="hidden sm:flex flex-wrap justify-end sm:justify-start w-full sm:w-auto text-xl font-bold"> <a href="/about" class="hover:text-blue-300 mx-2">About</a> <a href="/blog" class="hover:text-blue-300 mx-2">Blog</a> <a href="/dogs" class="hover:text-blue-300 mx-2">Dogs</a> <a href="/get-involved" class="hover:text-blue-300 mx-2">Get Involved</a> <a href="/resources" class="hover:text-blue-300 mx-2">Resources</a> <a href="/donate" class="hover:text-blue-300 mx-2">Donate</a> </div> </div> </footer>`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/components/Footer.astro", void 0);

const $$Astro$h = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    pageTitle = "FOMAS",
    description = "The Friends of Mountainair Animal Shelter",
    image = "/FOMASlogo_hWh.png"
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><meta property="og:image"${addAttribute(image, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body class="flex-col min-h-screen min-w-3.5"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/layouts/BaseLayout.astro", void 0);

const $$Astro$g = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${maybeRenderHead()}<main class="px-24 max-sm:px-5 max-w-full min-w-full mx-auto w-full min-h-screen"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/components/Main.astro", void 0);

const $$Astro$f = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$404;
  const pageTitle = "404: Page Not Found";
  const pageHeading = "Oops!";
  const pageDescription = "We can't seem to find the page you're looking for.";
  const buttonLabel = "Go Home";
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen py-10"> <div class="max-w-4xl mx-auto px-4 text-center"> <h1 class="text-4xl font-bold text-gray-900 my-8">${pageHeading}</h1> <p class="text-xl text-gray-700 mb-8">${pageDescription}</p> <img src="/doggy404.png" alt="Page Not Found" class="rounded-xl mx-auto w-full max-w-md"> <p class="mt-8"> <a href="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"> ${buttonLabel} </a> </p> </div> </div> ` })} ` })}`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/pages/404.astro", void 0);

const $$file$b = "/Users/oliverspeir/Code/fomas/frontend/src/pages/404.astro";
const $$url$b = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file$b,
  url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$e = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "pageTitle": "FOMAS | About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>My Astro Site</h1> <h1>About Me</h1> <h2>... and my new Astro site!</h2> <p>I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!</p> <p>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p> ` })} ` })}`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/pages/about.astro", void 0);

const $$file$a = "/Users/oliverspeir/Code/fomas/frontend/src/pages/about.astro";
const $$url$a = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$a,
  url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro();
const $$AnimalPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$AnimalPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="prose prose-xl lg:prose-2xl prose-indigo text-center mx-auto max-w-4xl"> <h1>${frontmatter.title}</h1> <img${addAttribute(frontmatter.image_url, "src")}${addAttribute(`Photo of ${frontmatter.title}`, "alt")} class="mx-auto w-full max-w-md rounded-xl"> <div> <p><strong>Breed:</strong> ${frontmatter.breed}</p> <p><strong>Age:</strong> ${frontmatter.age}</p> <p><strong>Gender:</strong> ${frontmatter.gender}</p> <p><strong>Size:</strong> ${frontmatter.size}</p> <p> <strong>Vaccinated:</strong> ${frontmatter.vaccinated ? "Yes" : "No"} </p> <p> <strong>Spayed/Neutered:</strong> ${frontmatter.spayed_neutered ? "Yes" : "No"} </p> <p> <strong>Special Needs:</strong> ${frontmatter.special_needs ? "Yes" : "No"} </p> <p> <strong>Friendly With:</strong> ${frontmatter.friendly_with.join(", ")} </p> <p> <strong>Not Friendly With:</strong> ${frontmatter.not_friendly_with.join(", ")} </p> <blockquote class="text-left">"${frontmatter.bio}"</blockquote> <p class="text-sm">
Adoption Status: <strong>${frontmatter.adoption_status}</strong> </p> </div> <div class="text-left prose prose-xl lg:prose-2xl mx-auto prose-headings:text-blue-900 prose-p:text-blue-950"> ${renderSlot($$result3, $$slots["default"])} </div> </article> ` })} ` })}`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/layouts/AnimalPostLayout.astro", void 0);

const html$2 = "<p>Buddy is a wonderful companion who has quickly become a favorite at our shelter. He has a sunny disposition and gets along well with children and other dogs. However, he’s not a fan of cats, so a cat-free home would be ideal for him. Buddy is vaccinated, neutered, and has no special needs, making him ready for his new family. If you’re looking for a loyal friend to add to your family, Buddy might just be your perfect match!</p>";

				const frontmatter$2 = {"layout":"../../layouts/AnimalPostLayout.astro","title":"Boots","breed":"Rotweiler","age":"2 years","gender":"Male","size":"Large","vaccinated":true,"spayed_neutered":true,"special_needs":false,"friendly_with":["Kids","Dogs"],"not_friendly_with":["Cats"],"bio":"Meet Buddy, a cheerful and friendly Golden Retriever with a heart of gold. Buddy loves playing fetch, enjoys long walks in the park, and is always ready for cuddle time. He's looking for a loving forever home where he can spread his joy.","image_url":"/doggy.jpeg","adoption_status":"Available"};
				const file$2 = "/Users/oliverspeir/Code/fomas/frontend/src/pages/animals/boots.md";
				const url$2 = "/animals/boots";
				function rawContent$2() {
					return "\nBuddy is a wonderful companion who has quickly become a favorite at our shelter. He has a sunny disposition and gets along well with children and other dogs. However, he's not a fan of cats, so a cat-free home would be ideal for him. Buddy is vaccinated, neutered, and has no special needs, making him ready for his new family. If you're looking for a loyal friend to add to your family, Buddy might just be your perfect match!\n";
				}
				function compiledContent$2() {
					return html$2;
				}
				function getHeadings$2() {
					return [];
				}

				const Content$2 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;

					return renderTemplate`${renderComponent(result, 'Layout', $$AnimalPostLayout, {
								file: file$2,
								url: url$2,
								content,
								frontmatter: content,
								headings: getHeadings$2(),
								rawContent: rawContent$2,
								compiledContent: compiledContent$2,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$2)}`
							})}`;
				});

const boots = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$2,
  compiledContent: compiledContent$2,
  default: Content$2,
  file: file$2,
  frontmatter: frontmatter$2,
  getHeadings: getHeadings$2,
  rawContent: rawContent$2,
  url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const html$1 = "<p>Buddy is a wonderful companion who has quickly become a favorite at our shelter. He has a sunny disposition and gets along well with children and other dogs. However, he’s not a fan of cats, so a cat-free home would be ideal for him. Buddy is vaccinated, neutered, and has no special needs, making him ready for his new family. If you’re looking for a loyal friend to add to your family, Buddy might just be your perfect match!</p>";

				const frontmatter$1 = {"layout":"../../layouts/AnimalPostLayout.astro","title":"Buddy","breed":"Golden Retriever","age":"2 years","gender":"Male","size":"Large","vaccinated":true,"spayed_neutered":true,"special_needs":false,"friendly_with":["Kids","Dogs"],"not_friendly_with":["Cats"],"bio":"Meet Buddy, a cheerful and friendly Golden Retriever with a heart of gold. Buddy loves playing fetch, enjoys long walks in the park, and is always ready for cuddle time. He's looking for a loving forever home where he can spread his joy.","image_url":"/doggy.jpeg","adoption_status":"Available"};
				const file$1 = "/Users/oliverspeir/Code/fomas/frontend/src/pages/animals/buddy.md";
				const url$1 = "/animals/buddy";
				function rawContent$1() {
					return "\nBuddy is a wonderful companion who has quickly become a favorite at our shelter. He has a sunny disposition and gets along well with children and other dogs. However, he's not a fan of cats, so a cat-free home would be ideal for him. Buddy is vaccinated, neutered, and has no special needs, making him ready for his new family. If you're looking for a loyal friend to add to your family, Buddy might just be your perfect match!\n";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [];
				}

				const Content$1 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${renderComponent(result, 'Layout', $$AnimalPostLayout, {
								file: file$1,
								url: url$1,
								content,
								frontmatter: content,
								headings: getHeadings$1(),
								rawContent: rawContent$1,
								compiledContent: compiledContent$1,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$1)}`
							})}`;
				});

const buddy = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  compiledContent: compiledContent$1,
  default: Content$1,
  file: file$1,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  rawContent: rawContent$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const html = "<p>Buddy is a wonderful companion who has quickly become a favorite at our shelter. He has a sunny disposition and gets along well with children and other dogs. However, he’s not a fan of cats, so a cat-free home would be ideal for him. Buddy is vaccinated, neutered, and has no special needs, making him ready for his new family. If you’re looking for a loyal friend to add to your family, Buddy might just be your perfect match!</p>";

				const frontmatter = {"layout":"../../layouts/AnimalPostLayout.astro","title":"Ceazar","breed":"Golden Retriever","age":"2 years","gender":"Male","size":"Large","vaccinated":true,"spayed_neutered":true,"special_needs":false,"friendly_with":["Kids","Dogs"],"not_friendly_with":["Cats"],"bio":"Meet Buddy, a cheerful and friendly Golden Retriever with a heart of gold. Buddy loves playing fetch, enjoys long walks in the park, and is always ready for cuddle time. He's looking for a loving forever home where he can spread his joy.","image_url":"/doggy.jpeg","adoption_status":"Available"};
				const file = "/Users/oliverspeir/Code/fomas/frontend/src/pages/animals/caezar.md";
				const url = "/animals/caezar";
				function rawContent() {
					return "\nBuddy is a wonderful companion who has quickly become a favorite at our shelter. He has a sunny disposition and gets along well with children and other dogs. However, he's not a fan of cats, so a cat-free home would be ideal for him. Buddy is vaccinated, neutered, and has no special needs, making him ready for his new family. If you're looking for a loyal friend to add to your family, Buddy might just be your perfect match!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AnimalPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const caezar = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro();
async function getStaticPaths$1() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{ "params": { "slug": slug.current } }`
  );
  console.log(paths);
  return {
    paths,
    fallback: false
    // or 'blocking' if you want to server-render missing pages on-demand
  };
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$slug;
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]`
  );
  if (!post) {
    throw new Error("Post not found");
  }
  const pageTitle = post.title;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <h1>${post.title}</h1> <div> ${post.body}
// Handle rendering of your post content here, taking into account rich text or block content as necessary.
</div> </article> ` })}`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/pages/posts/[slug].astro", void 0);

const $$file$9 = "/Users/oliverspeir/Code/fomas/frontend/src/pages/posts/[slug].astro";
const $$url$9 = "/posts/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file$9,
  getStaticPaths: getStaticPaths$1,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro();
const $$BlogPostFull = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BlogPostFull;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="text-xl"><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/components/BlogPostFull.astro", void 0);

const $$Astro$a = createAstro();
const Astro = $$Astro$a;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({}), () => "../posts/*.md");
  return [
    { params: { tag: "astro" }, props: { posts: allPosts } },
    { params: { tag: "successes" }, props: { posts: allPosts } },
    { params: { tag: "community" }, props: { posts: allPosts } },
    { params: { tag: "blogging" }, props: { posts: allPosts } },
    { params: { tag: "setbacks" }, props: { posts: allPosts } },
    { params: { tag: "learning in public" }, props: { posts: allPosts } }
  ];
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  const filteredPosts = posts.filter(
    (post) => post.frontmatter.tags?.includes(tag)
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-4xl">Posts tagged with ${tag}</p> <ul> ${filteredPosts.map((post) => renderTemplate`<p> ${renderComponent($$result3, "BlogPostFull", $$BlogPostFull, { "url": post.url, "title": post.frontmatter.title })}</p>`)} </ul> ` })} ` })}`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/pages/tags/[tag].astro", void 0);

const $$file$8 = "/Users/oliverspeir/Code/fomas/frontend/src/pages/tags/[tag].astro";
const $$url$8 = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file$8,
  getStaticPaths,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
const $$FullPageBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FullPageBanner;
  const { backgroundImage, headline, buttonText, buttonLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative min-h-[500px] w-full bg-cover bg-center flex flex-col justify-end items-center text-left text-white p-8"${addAttribute(`background-image: url('${backgroundImage}');`, "style")}> <h1 class="text-6xl shadow-inner font-bold">${headline}</h1> <a${addAttribute(buttonLink, "href")} class="mt-4 bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"> ${buttonText} </a> </div>`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/components/FullPageBanner.astro", void 0);

const $$Astro$8 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$1;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "pageTitle": "FOMAS | Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FullPageBanner", $$FullPageBanner, { "backgroundImage": "./doggy.jpeg", "headline": "Get Involved", "buttonText": "Learn More", "buttonLink": "/get-involved" })} ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>hello</h1> ` })} ` })}`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/pages/index.astro", void 0);

const $$file$7 = "/Users/oliverspeir/Code/fomas/frontend/src/pages/index.astro";
const $$url$7 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Blog;
  const posts = await sanityClient.fetch(
    `*[_type == "post" && defined(slug)] | order(publishedAt desc)`
  );
  const pageTitle = "Posts";
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen py-10"> <div class="max-w-6xl mx-auto px-4"> <h1 class="text-4xl font-bold text-center text-blue-950 my-8"> ${pageTitle} </h1> <ul> ${posts.map((post) => renderTemplate`<li> <a${addAttribute(`blog/posts/${post.slug.current}`, "href")} class="post-link"> ${post.title} </a> </li>`)} </ul> </div> </div> ` })} ` })}`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/pages/blog.astro", void 0);

const $$file$6 = "/Users/oliverspeir/Code/fomas/frontend/src/pages/blog.astro";
const $$url$6 = "/blog";

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "pageTitle": "FOMAS | Contact Us" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>Hello World</h1> ` })} ` })}`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/pages/contact.astro", void 0);

const $$file$5 = "/Users/oliverspeir/Code/fomas/frontend/src/pages/contact.astro";
const $$url$5 = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$AnimalCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AnimalCard;
  const {
    url,
    title,
    breed,
    age,
    gender,
    size,
    vaccinated,
    spayed_neutered,
    special_needs,
    friendly_with,
    not_friendly_with,
    bio,
    image_url,
    adoption_status
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card min-w-[320px] mt-8 rounded-3xl bg-blue-200 outline outline-slate-200 shadow-xl"> <a${addAttribute(url, "href")} class="flex flex-col h-full"> <!-- Use the image URL directly, with a fallback to a default image --> <img class="rounded-t-3xl object-cover h-48 w-full"${addAttribute(image_url || "/default-animal-image.jpeg", "src")}${addAttribute(`Photo of ${title}`, "alt")}> <div class="p-4 flex flex-col flex-grow"> <h2 class="title text-xl font-semibold text-blue-900">${title}</h2> <p class="breed text-md text-blue-950">Breed: ${breed}</p> <p class="age text-md text-blue-950">Age: ${age}</p> <p class="gender text-md text-blue-950">Gender: ${gender}</p> <p class="size text-md text-blue-950">Size: ${size}</p> <p class="vaccinated text-md text-blue-950">
Vaccinated: ${vaccinated ? "Yes" : "No"} </p> <p class="spayed_neutered text-md text-blue-950">
Spayed/Neutered: ${spayed_neutered ? "Yes" : "No"} </p> <p class="special_needs text-md text-blue-950">
Special Needs: ${special_needs ? "Yes" : "No"} </p> <p class="friendly_with text-md text-blue-950">
Friendly With: ${friendly_with.join(", ")} </p> <p class="not_friendly_with text-md text-blue-950">
Not Friendly With: ${not_friendly_with.join(", ")} </p> <p class="bio text-gray-600 text-sm flex-grow line-clamp-3">${bio}</p> <p class="adoption_status text-md font-semibold">${adoption_status}</p> </div> </a> </div>`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/components/AnimalCard.astro", void 0);

const $$Astro$4 = createAstro();
const $$Dogs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Dogs;
  const allAnimals = await Astro2.glob(/* #__PURE__ */ Object.assign({"./animals/boots.md": () => Promise.resolve().then(() => boots),"./animals/buddy.md": () => Promise.resolve().then(() => buddy),"./animals/caezar.md": () => Promise.resolve().then(() => caezar)}), () => "../pages/animals/*.md");
  const animals = allAnimals.map((animal) => {
    const { title, breed, age, gender, size, vaccinated, spayed_neutered, special_needs, friendly_with, not_friendly_with, bio, image_url, adoption_status } = animal.frontmatter;
    return {
      url: animal.url,
      title,
      breed,
      age,
      gender,
      size,
      vaccinated,
      spayed_neutered,
      special_needs,
      friendly_with,
      not_friendly_with,
      bio,
      image_url,
      adoption_status
    };
  });
  const pageTitle = "Adoptable Animals";
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen py-10"> <div class="max-w-6xl mx-auto px-4"> <h1 class="text-4xl font-bold text-center text-blue-900 my-8">${pageTitle}</h1> <p class="text-lg text-blue-950 mb-4 text-center">Meet our adorable animals looking for their forever homes.</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${animals.map((animal) => renderTemplate`${renderComponent($$result3, "AnimalCard", $$AnimalCard, { "key": animal.url, "url": animal.url, "title": animal.title, "breed": animal.breed, "age": animal.age, "gender": animal.gender, "size": animal.size, "vaccinated": animal.vaccinated, "spayed_neutered": animal.spayed_neutered, "special_needs": animal.special_needs, "friendly_with": animal.friendly_with, "not_friendly_with": animal.not_friendly_with, "bio": animal.bio, "image_url": animal.image_url, "adoption_status": animal.adoption_status })}`)} </div> </div> </div> ` })} ` })}`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/pages/dogs.astro", void 0);

const $$file$4 = "/Users/oliverspeir/Code/fomas/frontend/src/pages/dogs.astro";
const $$url$4 = "/dogs";

const dogs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dogs,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Donate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Donate;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "FOMAS | Donate" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>Hello World</h1> ` })} ` })}`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/pages/donate.astro", void 0);

const $$file$3 = "/Users/oliverspeir/Code/fomas/frontend/src/pages/donate.astro";
const $$url$3 = "/donate";

const donate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Donate,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$GetInvolved = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GetInvolved;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "FOMAS | Volunteer" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>Hello World</h1> ` })} ` })}`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/pages/get-involved.astro", void 0);

const $$file$2 = "/Users/oliverspeir/Code/fomas/frontend/src/pages/get-involved.astro";
const $$url$2 = "/get-involved";

const getInvolved = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GetInvolved,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Resources = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Resources;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "FOMAS | Resources" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>Hello World</h1> ` })} ` })}`;
}, "/Users/oliverspeir/Code/fomas/frontend/src/pages/resources.astro", void 0);

const $$file$1 = "/Users/oliverspeir/Code/fomas/frontend/src/pages/resources.astro";
const $$url$1 = "/resources";

const resources = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resources,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Tag Index";
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "../posts/*.md");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-os4i7owy": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-4xl " data-astro-cid-os4i7owy> ${tags.map((tag) => renderTemplate`<p data-astro-cid-os4i7owy><a class="text-blue-200"${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a></p>`)} </div> ` })} ` })} `;
}, "/Users/oliverspeir/Code/fomas/frontend/src/pages/tags/index.astro", void 0);

const $$file = "/Users/oliverspeir/Code/fomas/frontend/src/pages/tags/index.astro";
const $$url = "/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _404 as _, about as a, boots as b, buddy as c, caezar as d, _slug_ as e, _tag_ as f, blog as g, contact as h, index$1 as i, dogs as j, donate as k, getInvolved as l, index as m, resources as r };
