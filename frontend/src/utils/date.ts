// utils/date.ts

/**
 * Formats a date string into a more readable format.
 * 
 * @param dateString The date to format.
 * @param locale The locale string, default is 'en-US'.
 * @returns The formatted date string.
 */
export function formatDate(dateString: Date | string | number, locale = 'en-US') {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat(locale, options).format(date);
}
  