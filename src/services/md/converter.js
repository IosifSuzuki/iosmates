import Showdown from 'showdown';

const classExtension = () => {
  return [
    {
      type: 'output',
      regex: /<h1>/g,
      replace: '<h1 class="text-center text-xl font-bold pb-4">',
    },
    {
      type: 'output',
      regex: /<h2>/g,
      replace: '<h2 class="text-left text-xl font-boldc p-2">',
    },
    {
      type: 'output',
      regex: /<h3>/g,
      replace: '<h3 class="text-left text-lg font-bold p-2">',
    },
    {
      type: 'output',
      regex: /<p>/g,
      replace: '<p class="indent-8">',
    },
    {
      type: 'output',
      regex: /<ul>/g,
      replace: '<ul class="list-disc px-8 list-inside leading-8">',
    },
  ];
};

export default function Converter() {
  const converter = new Showdown.Converter({
    extensions: [classExtension],
  });
  converter.setFlavor('github');
  converter.setOption('moreStyling', true);
  converter.setOption('noHeaderId', true);

  this.converter = converter;
}

function makeHtml(text) {
  return this.converter.makeHtml(text);
}

Converter.prototype.makeHtml = makeHtml;
