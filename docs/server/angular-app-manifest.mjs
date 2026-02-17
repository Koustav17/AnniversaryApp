
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
    'index.csr.html': {size: 1225, hash: '416f92cb6f4a8d85330561e30ab9d23f59e1e044f202e7f392ec36cb4ae8c922', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1083, hash: 'cd25e85a2cdca9225fd434f5a8a9155f31817f138bdb085bd0bdca1c12c3eb54', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5583, hash: '9165136e2bac3babdfe5705eb51874f23b74afa13e113beb2e1fe2728c59db84', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-V232HVLG.css': {size: 2897, hash: 'HZ8b381CNFs', text: () => import('./assets-chunks/styles-V232HVLG_css.mjs').then(m => m.default)}
  },
};
