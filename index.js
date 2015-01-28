require('newrelic');
require('6to5/register');
require('./lib/markdown/server-side').install({harmony: true});
require('./lib/server');
