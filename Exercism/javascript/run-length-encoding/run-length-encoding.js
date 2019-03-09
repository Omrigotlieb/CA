export const encode = (str) => {
  if (!str) return '';
  let counter = 1;
  const result = [];
  for (let i = 1; i < str.length + 1; i += 1) {
    if (str[i] === str[i - 1]) {
      counter += 1;
    } else if (counter !== 1) {
      result.push(`${counter}${str[i - 1]}`);
      counter = 1;
    } else {
      result.push(str[i - 1]);
    }
  }
  return result.join('');
};


export const decode = (str) => {
  const result = [];
  if (!str) return '';
  const split = str.match(/[0-9]*[a-zA-Z ]/g);
  split.forEach((s) => {
    let amount = Number.parseInt(s.match(/[0-9]*/), 10);
    amount = amount || 1;
    const digit = s.match(/[a-zA-Z ]/);
    while (amount) {
      result.push(digit);
      amount -= 1;
    }
  });
  return result.join('');
};
