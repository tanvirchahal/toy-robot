// Random code logic referenced from https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
export const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
