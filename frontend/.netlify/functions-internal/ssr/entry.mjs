import { renderers } from './renderers.mjs';
import { manifest } from './manifest_gXV6qHw9.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_utIRRhtG.mjs');
const _page1 = () => import('./chunks/studio-route_fQcfTi0T.mjs');
const _page2 = () => import('./chunks/404_zoOtoXyB.mjs');
const _page3 = () => import('./chunks/about_5ngPXEBE.mjs');
const _page4 = () => import('./chunks/adoption_v_ae5UDK.mjs');
const _page5 = () => import('./chunks/_slug__Rrw2rOfI.mjs');
const _page6 = () => import('./chunks/blog_qaOR-uI3.mjs');
const _page7 = () => import('./chunks/director_HRE2XMZI.mjs');
const _page8 = () => import('./chunks/president_y_ezdYoU.mjs');
const _page9 = () => import('./chunks/secretary_-heZDH27.mjs');
const _page10 = () => import('./chunks/treasurer_NFNtcICo.mjs');
const _page11 = () => import('./chunks/vice-president_E_aAz8Ej.mjs');
const _page12 = () => import('./chunks/index_QQBsqq2-.mjs');
const _page13 = () => import('./chunks/contact_Lp1W8QSt.mjs');
const _page14 = () => import('./chunks/dogs_yEMsAEYk.mjs');
const _page15 = () => import('./chunks/donate_8zSfOfjb.mjs');
const _page16 = () => import('./chunks/_slug__gZ0eVahC.mjs');
const _page17 = () => import('./chunks/resources_biarU3PJ.mjs');
const _page18 = () => import('./chunks/volunteer_-P1oqmtD.mjs');
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
    "middlewareSecret": "4758c93e-6a54-49bc-8e25-92d62d5946af"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
