function values(obj) {
  const values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
}
module.exports = values;
