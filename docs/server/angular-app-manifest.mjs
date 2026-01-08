
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
    'index.csr.html': {size: 1225, hash: 'ab840e04d2f81e08a2d46b59ccfe6bfa799e1c49a239a15123d5a46fc7fa7b0c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1083, hash: '14eb224112f774217cedad5b7c2baee734e53481538b059b7a97c86f2d938295', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5284, hash: '8d006b6d74056f43168a9789f7bf10e71da6c0881b74d56292159b61ea648eec', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-V232HVLG.css': {size: 2897, hash: 'HZ8b381CNFs', text: () => import('./assets-chunks/styles-V232HVLG_css.mjs').then(m => m.default)}
  },
};
