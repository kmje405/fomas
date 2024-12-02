export { renderers } from '../renderers.mjs';

const page = () => import('./pages/generic_UmMgrAla.mjs').then(n => n.g);

export { page };
