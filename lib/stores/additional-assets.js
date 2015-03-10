import moduleToChunk from '../chunks';

export default class AdditionalAssets {
  constructor() {
    this.scripts = [];
  }

  addScript(script) {
    var chunks = moduleToChunk[script];
    chunks.forEach(c => this.scripts.push(c));
  }
};
