var middleware = [
  require('./response-time'),
  require('./logging'),
  require('./optimizers'),
  require('./health'),
  require('./assets'),
  require('./routing')
];

module.exports = {
  setup(app) {
    middleware.forEach((m) => {
      m.setup(app);
    });
  }
};
