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

export function scrollToSection(id, offset = 80) {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    window.location.hash = `#${id}`;
    return;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  window.location.hash = '';
}
