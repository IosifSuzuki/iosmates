export function dateFormatted(date) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formatter.format(date);
}

export function isDateToday(dateStr) {
  if (!dateStr) return false;

  const savedDate = new Date(dateStr);
  const now = new Date();

  return (
    savedDate.getFullYear() === now.getFullYear() &&
    savedDate.getMonth() === now.getMonth() &&
    savedDate.getDate() === now.getDate()
  );
}
