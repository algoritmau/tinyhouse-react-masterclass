export const truncateString = (str) =>
  str.length > 96 ? `${str.substring(0, 80)}...` : str
