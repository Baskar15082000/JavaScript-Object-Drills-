function pairs(obj) {
  const pair = [];
  for (let key in obj) {
    pair.push([key, obj[key]]);
  }
  return pair;
}
module.exports = pairs;
