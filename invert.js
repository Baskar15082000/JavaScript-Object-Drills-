function invert(obj) {
  const invertedCopy = [];
  for (let key in obj) {
    tempKey = obj[key];
    obj[tempKey] = key;
    delete obj[key];
  }
  return obj;
}
module.exports = invert;
