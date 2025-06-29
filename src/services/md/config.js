export const Style = Object.freeze({
  ARTICLE: 'article',
  PREVIEW: 'preview',
  SHORT: 'short',
});

export const ArticleClassExtension = () => {
  return [
    {
      type: 'output',
      regex: /<h1([^>]*)>/g,
      replace: '<h1 class="text-title text-center text-xl font-bold pb-4"$1>',
    },
    {
      type: 'output',
      regex: /<h2([^>]*)>/g,
      replace: '<h2 class="text-title text-left text-lg font-bold p-2"$1>',
    },
    {
      type: 'output',
      regex: /<h3([^>]*)>/g,
      replace: '<h3 class="text-title text-left text-lg font-bold p-2"$1>',
    },
    {
      type: 'output',
      regex: /<p([^>]*)>/g,
      replace: '<p class="text-regular indent-8"$1>',
    },
    {
      type: 'output',
      regex: /<ul([^>]*)>/g,
      replace:
        '<ul class="text-regular list-disc px-8 list-inside leading-8"$1>',
    },
  ];
};

export const ShortTextClassExtension = () => {
  return [
    {
      type: 'output',
      regex: /<h1([^>]*)>/g,
      replace: '<h1 class="text-title text-center text-xl font-bold pb-4"$1>',
    },
    {
      type: 'output',
      regex: /<h2([^>]*)>/g,
      replace: '<h2 class="text-title text-center text-lg font-bold py-2"$1>',
    },
    {
      type: 'output',
      regex: /<h3([^>]*)>/g,
      replace: '<h3 class="text-regular text-center text-lg font-bold"$1>',
    },
    {
      type: 'output',
      regex: /<p([^>]*)>/g,
      replace: '<p class="text-regular text-center py-2"$1>',
    },
  ];
};

export const PreviewClassExtension = () => {
  return [
    {
      type: 'output',
      regex: /<h1([^>]*)>/g,
      replace: '<h1 class="text-title text-left text-xl font-bold pb-4"$1>',
    },
    {
      type: 'output',
      regex: /<h2([^>]*)>/g,
      replace: '<h2 class="text-title text-left text-lg font-bold py-2"$1>',
    },
    {
      type: 'output',
      regex: /<h3([^>]*)>/g,
      replace: '<h3 class="text-regular text-left text-lg font-bold p-2"$1>',
    },
  ];
};
