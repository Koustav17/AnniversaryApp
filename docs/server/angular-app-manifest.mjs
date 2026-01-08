
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
    'index.csr.html': {size: 1225, hash: 'f4f2535bd34a0ce0b31285abab8d0c18efb17fdb1a4399adebea9c23a63e3c0c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1083, hash: 'a193b9940bf8842a70da3a07806028e51f67438410d109f5e92c60fdf0645e50', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5296, hash: 'c4f05339df0dc19dfaf2088ad8d076b239003dc49f11fef43d5d87c26472a427', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-V232HVLG.css': {size: 2897, hash: 'HZ8b381CNFs', text: () => import('./assets-chunks/styles-V232HVLG_css.mjs').then(m => m.default)}
  },
};
