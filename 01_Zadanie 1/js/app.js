const data = [1, 2, 3, 4, 5];

const without = (data, ...x) => {
  const newAray = [...data, ...x];
  return newAray;
};

console.log(without(data, 1, 2));
console.log(without(data, 5, 3));
console.log(without(data, 1, 2, 3, 4));
console.log(without(data));
console.log(without(data, 1, 2, 3, 4, 5));
/**
 * Poniżej pisz swój kod!
 */
