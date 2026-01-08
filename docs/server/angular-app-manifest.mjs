
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/AnniversaryApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/AnniversaryApp"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1225, hash: 'eca8fc38f5f21f01a16e0c8dfeaf8203fe5f999be4e2c1768f77b955fa1155b6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1083, hash: '5bd7f1ef9995052affc9472a7f93fbd2a144de39107e7e516452f88664c08774', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5297, hash: 'a0010022362a24aa2999402d1010e1e64fe32b3b438394132396363f8bce4486', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-V232HVLG.css': {size: 2897, hash: 'HZ8b381CNFs', text: () => import('./assets-chunks/styles-V232HVLG_css.mjs').then(m => m.default)}
  },
};
