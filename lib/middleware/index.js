import ResponseTime from './response-time';
import Logging from './logging';
import Optimizers from './optimizers';
import Health from './health';
import Assets from './assets';
import Routing from './routing';

const middleware = [
  ResponseTime,
  Logging,
  Optimizers,
  Health,
  Assets,
  Routing
];

export default {
  setup(app) {
    middleware.forEach((m) => {
      m.setup(app);
    });
  }
};
