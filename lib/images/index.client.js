import _ from 'lodash';

const context = require.context('.', true, /\.(jpe?g|png|gif|svg)$/i);

const keys = context.keys();
const values = keys.map(context);

const images = _.zipObject(context.keys(), values);

export default images;
