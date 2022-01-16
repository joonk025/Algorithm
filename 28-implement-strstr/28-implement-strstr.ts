function strStr(haystack: string, needle: string): number {
  return !needle.length ? 0 : haystack.indexOf(needle);
};