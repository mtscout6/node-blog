require('node-jsx').install({extension: '.jsx', harmony: true});
require('./lib/markdown/server-side').install({harmony: true});
require('./lib/server');
