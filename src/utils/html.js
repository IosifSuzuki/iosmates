export function cloneElement(elementString) {
  const container = document.createElement('div');
  container.innerHTML = elementString;
  return container;
}

export function removeElementsByTag(root, tagsToRemove) {
  const tags = new Set(tagsToRemove.map((tag) => tag.toUpperCase()));

  const elements = root.querySelectorAll('*');
  elements.forEach((element) => {
    if (tags.has(element.tagName)) {
      element.remove();
    }
  });
}

export function removeElementsByID(root, idsToRemove) {
  const ids = new Set(idsToRemove.map((id) => id.toLowerCase()));

  const elements = root.querySelectorAll('*');
  elements.forEach((element) => {
    if (element.id && ids.has(element.id.toLowerCase())) {
      element.remove();
    }
  });
}
