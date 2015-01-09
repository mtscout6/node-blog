var middleware = [
  require('./response-time'),
  require('./logging'),
  require('./optimizers'),
  require('./health'),
  require('./assets'),
  require('./routing')
];

module.exports = {
  setup: function(app) {
    middleware.forEach(function (m) {
      m.setup(app);
    });
  }
};
