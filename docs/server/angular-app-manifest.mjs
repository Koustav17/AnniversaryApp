
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
    'index.csr.html': {size: 1225, hash: 'b6ff59234e2c3b6f87622c457a7671574a8f9d141bce138545fb27d5debd2e47', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1083, hash: '8176654cd3ff3abdea4d861860b49629c19b1b9c7fb589784dee2137cae199fd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5295, hash: 'fe3e5fc1bf658e6f5b0ecced6054ca28b4a2f4314411a1c7068d39763a1ab666', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-V232HVLG.css': {size: 2897, hash: 'HZ8b381CNFs', text: () => import('./assets-chunks/styles-V232HVLG_css.mjs').then(m => m.default)}
  },
};
