export function truncateHTML(root, charLimit) {
  let charCount = 0;
  findAllTextElements(root, (element) => {
    if (charCount >= charLimit) {
      element.remove();
      return;
    }

    charCount += element.textContent.length;
    if (charCount < charLimit) {
      return;
    }

    const remaining = charLimit - charCount + element.textContent.length;
    const remainingText =
      element.textContent.slice(0, remaining).replace(/\s+\S*$/, '') + ' ...';

    element.textContent = remainingText;
  });

  clearElements(root);
}

function clearElements(element) {
  if (element.textContent.trim() === '') {
    element.remove();
  }
  const children = Array.from(element.childNodes);
  for (const child of children) {
    clearElements(child);
  }
}

function findAllTextElements(element, handler) {
  switch (element.nodeType) {
    case Node.TEXT_NODE:
      handler(element);
      break;
    case Node.ELEMENT_NODE:
      const children = Array.from(element.childNodes);
      for (const child of children) {
        findAllTextElements(child, handler);
      }
      break;
    default:
      break;
  }
}
