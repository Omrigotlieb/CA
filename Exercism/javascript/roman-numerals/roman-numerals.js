export const toRoman = (num) => {
  const result = [];
  let temp = num;
  while (temp > 0) {
    if (temp >= 1000) {
      result.push('M');
      temp -= 1000;
      continue;
    }
    if (temp >= 900) {
      result.push('CM');
      temp -= 900;
      continue;
    }
    if (temp >= 500) {
      result.push('D');
      temp -= 500;
      continue;
    }
    if (temp >= 400) {
      result.push('CD');
      temp -= 400;
      continue;
    }
    if (temp >= 100) {
      result.push('C');
      temp -= 100;
      continue;
    }
    if (temp >= 90) {
      result.push('XC');
      temp -= 90;
      continue;
    }
    if (temp >= 50) {
      result.push('L');
      temp -= 50;
      continue;
    }
    if (temp >= 40) {
      result.push('XL');
      temp -= 40;
      continue;
    }
    if (temp >= 10) {
      result.push('X');
      temp -= 10;
      continue;
    }
    if (temp === 9) {
      result.push('IX');
      temp -= 9;
      continue;
    }
    if (temp >= 5) {
      result.push('V');
      temp -= 5;
      continue;
    }
    if (temp === 4) {
      result.push('IV');
      temp -= 4;
      continue;
    }
    if (temp >= 1) {
      result.push('I');
      temp -= 1;
      continue;
    }
  }
  return result.join('');
};
