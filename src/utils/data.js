export async function fetchContentFromLinks(links) {
  const entries = await Promise.all(
    links.map(async (url) => {
      const res = await fetch(url);
      const data = await res.text();
      return [url, data];
    }),
  );
  return Object.fromEntries(entries);
}
