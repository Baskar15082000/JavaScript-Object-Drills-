function getKey(object) {
  const keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}
module.exports = getKey;
