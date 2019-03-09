export const reverseString = (str) => {
  const result = [];
  [...str].forEach(letter => result.unshift(letter));
  return result.join('');
};
