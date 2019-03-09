export const toRoman = (num) => {
  const ROMAN_MAP = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };
  const result = [];
  let tempNum = num;
let modulo = 10000;
  while (tempNum > 0) {
    const current = tempNum % modulo;
    if (current > 0) {
      if (tempNum > 0) {
        result.push(ROMAN_MAP[modulo / 10]);
        tempNum -= modulo / 10;
      } else {
        modulo /= 10;
      }
    } else {
      modulo /= 10;
    }
  }
  return result.join('');
};
