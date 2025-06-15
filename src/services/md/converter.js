import Showdown from 'showdown';

import { Style, ArticleClassExtension, PreviewClassExtension } from './config';

export default function Converter(style) {
  let extensions = null;
  switch (style) {
    case Style.PREVIEW:
      extensions = PreviewClassExtension;
      break;
    default:
      extensions = ArticleClassExtension;
      break;
  }
  const converter = new Showdown.Converter({
    extensions: [extensions],
  });

  converter.setFlavor('github');
  converter.setOption('customizedHeaderId', true);

  this.converter = converter;
}

function makeHtml(text) {
  return this.converter.makeHtml(text);
}

Converter.prototype.makeHtml = makeHtml;
