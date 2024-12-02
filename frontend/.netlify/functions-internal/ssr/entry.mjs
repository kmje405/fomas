import { renderers } from './renderers.mjs';
import { manifest } from './manifest_A2vYjsdL.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_utIRRhtG.mjs');
const _page1 = () => import('./chunks/studio-route_e9pGIkq6.mjs');
const _page2 = () => import('./chunks/404_LgfFU-hF.mjs');
const _page3 = () => import('./chunks/about_Fit7v94W.mjs');
const _page4 = () => import('./chunks/adoption_Ll8E8tVC.mjs');
const _page5 = () => import('./chunks/_slug__-vmIxQkq.mjs');
const _page6 = () => import('./chunks/blog_Q31qARdD.mjs');
const _page7 = () => import('./chunks/director_D4ddUvby.mjs');
const _page8 = () => import('./chunks/president_vLp9bfPV.mjs');
const _page9 = () => import('./chunks/secretary_xKMgLfbS.mjs');
const _page10 = () => import('./chunks/treasurer_vHDWWxaA.mjs');
const _page11 = () => import('./chunks/vice-president_YbmAvxy-.mjs');
const _page12 = () => import('./chunks/index_OmwCMPw7.mjs');
const _page13 = () => import('./chunks/contact_Ba9XSV-E.mjs');
const _page14 = () => import('./chunks/dogs_wayhYGXY.mjs');
const _page15 = () => import('./chunks/donate_6EM7Nvsi.mjs');
const _page16 = () => import('./chunks/_slug__LmjR41Go.mjs');
const _page17 = () => import('./chunks/resources_-6RZfK-1.mjs');
const _page18 = () => import('./chunks/volunteer_grg4luFv.mjs');
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
    "middlewareSecret": "d7d20d2d-ade8-46a1-80ed-48c80dc5d12c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
