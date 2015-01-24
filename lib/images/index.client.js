var _ = require('lodash');
var context = require.context('.', true, /\.(jpe?g|png|gif|svg)$/i);

var keys = context.keys();
var values = keys.map(context);

var images = _.zipObject(context.keys(), values);

module.exports = images;
