// Function will truncate the string to the specified length and append the specified string to the end of the truncated string.

export const truncate = (str, length = 24, ending) => {
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}