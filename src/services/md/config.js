export const Style = Object.freeze({
  ARTICLE: 'article',
  PREVIEW: 'preview',
});

export const ArticleClassExtension = () => {
  return [
    {
      type: 'output',
      regex: /<h1([^>]*)>/g,
      replace: '<h1 class="text-center text-xl font-bold pb-4"$1>',
    },
    {
      type: 'output',
      regex: /<h2([^>]*)>/g,
      replace: '<h2 class="text-left text-lg font-bold p-2"$1>',
    },
    {
      type: 'output',
      regex: /<h3([^>]*)>/g,
      replace: '<h3 class="text-left text-lg font-bold p-2"$1>',
    },
    {
      type: 'output',
      regex: /<p([^>]*)>/g,
      replace: '<p class="indent-8"$1>',
    },
    {
      type: 'output',
      regex: /<ul([^>]*)>/g,
      replace: '<ul class="list-disc px-8 list-inside leading-8"$1>',
    },
  ];
};

export const PreviewClassExtension = () => {
  return [
    {
      type: 'output',
      regex: /<h1([^>]*)>/g,
      replace: '<h1 class="text-left text-xl font-bold pb-4"$1>',
    },
    {
      type: 'output',
      regex: /<h2([^>]*)>/g,
      replace: '<h2 class="text-left text-lg font-bold py-2"$1>',
    },
    {
      type: 'output',
      regex: /<h3([^>]*)>/g,
      replace: '<h3 class="text-left text-lg font-bold p-2"$1>',
    },
  ];
};
