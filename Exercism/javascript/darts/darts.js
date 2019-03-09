export const solve = (x, y) => {
  if (Number.isNaN(Number.parseInt(x, 10)) || Number.isNaN(Number.parseInt(y, 10))) return null;
  const location = Math.sqrt((x ** 2) + (y ** 2));
  if (location <= 1) return 10;
  if (location <= 5) return 5;
  if (location <= 10) return 1;
  return 0;
};
