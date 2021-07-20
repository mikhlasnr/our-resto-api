// Handling Capitalize Each Word
const handlingCapitalize = text => {
  const arr = text.toLowerCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const textResult = arr.join(" ");
  return textResult;
};
module.exports = {
  handlingCapitalize,
};
