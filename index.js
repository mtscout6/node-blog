require('babel/register');
require('newrelic');
require('./lib/markdown/server-side').install();
require('./lib/server');
