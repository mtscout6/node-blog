import _ from 'lodash';
import walk from './walk-dir';

global.context_shim = (dir, recursive, pattern) => {
  let files = walk(__dirname, pattern);

  let result = (post) => {
    return require(result[post]);
  };

  files.reduce((acc, f) => {
    acc[f] = f;
    return acc;
  }, result);

  result.keys = () => {
    return Object.keys(result).filter(k => k !== 'keys');
  };

  return result;
};
