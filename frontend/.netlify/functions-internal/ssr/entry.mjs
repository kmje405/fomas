import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Rug1A2XK.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_utIRRhtG.mjs');
const _page1 = () => import('./chunks/studio-route_fQcfTi0T.mjs');
const _page2 = () => import('./chunks/404_O5Z8I3CC.mjs');
const _page3 = () => import('./chunks/about_YnNqvQzJ.mjs');
const _page4 = () => import('./chunks/adoption_PSVr2sfo.mjs');
const _page5 = () => import('./chunks/_slug__UvOQu_3f.mjs');
const _page6 = () => import('./chunks/blog_ozrr0ZlH.mjs');
const _page7 = () => import('./chunks/director_xFTtuvnY.mjs');
const _page8 = () => import('./chunks/president_Fal64ydH.mjs');
const _page9 = () => import('./chunks/secretary_zVcQ07SD.mjs');
const _page10 = () => import('./chunks/treasurer_n4aTUqkm.mjs');
const _page11 = () => import('./chunks/vice-president_RND51dlw.mjs');
const _page12 = () => import('./chunks/index_mnMSk46G.mjs');
const _page13 = () => import('./chunks/contact_Co7uHXWl.mjs');
const _page14 = () => import('./chunks/dogs_pTjimy8z.mjs');
const _page15 = () => import('./chunks/donate_RWNzy_pj.mjs');
const _page16 = () => import('./chunks/_slug__lAqxSKG6.mjs');
const _page17 = () => import('./chunks/resources_GZZjXKkM.mjs');
const _page18 = () => import('./chunks/volunteer_PhGJFkPb.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.3.2_@types+node@20.11.17_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/@sanity+astro@2.2.0_@sanity+client@6.12.4_astro@4.3.2_@types+node@20.11.17_typescript@5.3.3___yygcdup7qxvzpquwopob4wh4ge/node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/about.astro", _page3],
    ["src/pages/adoption.astro", _page4],
    ["src/pages/animals/[slug].astro", _page5],
    ["src/pages/blog.astro", _page6],
    ["src/pages/board-members/director.astro", _page7],
    ["src/pages/board-members/president.astro", _page8],
    ["src/pages/board-members/secretary.astro", _page9],
    ["src/pages/board-members/treasurer.astro", _page10],
    ["src/pages/board-members/vice-president.astro", _page11],
    ["src/pages/index.astro", _page12],
    ["src/pages/contact.astro", _page13],
    ["src/pages/dogs.astro", _page14],
    ["src/pages/donate.astro", _page15],
    ["src/pages/posts/[slug].astro", _page16],
    ["src/pages/resources.astro", _page17],
    ["src/pages/volunteer.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "f6e68306-6859-40d0-b93a-238d17cc91a7"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
