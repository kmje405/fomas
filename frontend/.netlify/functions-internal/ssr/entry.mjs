import { renderers } from './renderers.mjs';
import { manifest } from './manifest_vvhcJRfi.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CL25hAUR.mjs');
const _page1 = () => import('./chunks/studio-route_f8aCS241.mjs');
const _page2 = () => import('./chunks/404_FPlXJlee.mjs');
const _page3 = () => import('./chunks/about_7fdEjRxF.mjs');
const _page4 = () => import('./chunks/boots_4pCUwn-p.mjs');
const _page5 = () => import('./chunks/buddy_J7CB9bh9.mjs');
const _page6 = () => import('./chunks/caezar_FIt3gm_F.mjs');
const _page7 = () => import('./chunks/_slug__RSNCToLu.mjs');
const _page8 = () => import('./chunks/index_IodsCmak.mjs');
const _page9 = () => import('./chunks/blog_lFvyI9uk.mjs');
const _page10 = () => import('./chunks/contact_u4yzrwHl.mjs');
const _page11 = () => import('./chunks/dogs_bbK10x_9.mjs');
const _page12 = () => import('./chunks/donate_Wr0V2pbm.mjs');
const _page13 = () => import('./chunks/get-involved_lZ1X99ru.mjs');
const _page14 = () => import('./chunks/resources_eZHoq3do.mjs');
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
    "middlewareSecret": "39d84d07-5ba8-4fe5-b417-a013d44804ac"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
