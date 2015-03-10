import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import RequestShortener from 'webpack/lib/RequestShortener';

export default class ChunksMapPlugin {
  constructor(publicPath) {
    this.publicPath = publicPath;
  }

  apply(compiler) {
    compiler.plugin('done', (stats) => {
      var requestShortener = new RequestShortener(process.cwd());
      var compilation = stats.compilation;

      var chunks = _(compilation.chunks)
        .filter(c => { return !c.entry && !c.initial; })
        .map(c => {
          return _(c.modules)
            .map(m => m.reasons.map(r => {
              return {
                chunk: this.publicPath + c.files[0],
                module: r.module.readableIdentifier(requestShortener)
              };
            }))
            .flatten()
            .value();
        })
        .flatten()
        .groupBy('module')
        .mapValues(x => x.map(y => y.chunk))
        .value();

      var assetMapPath = path.join(process.cwd(), 'lib/chunks.json');
      fs.writeFileSync(assetMapPath, JSON.stringify(chunks), 'utf-8');
    });
  }
}
