function defaults(obj, defaultProps) {
  for (let key in obj) {
    if (obj[key] === undefined) {
      obj[key] = defaultProps[key];
    }
  }
  return obj;
}
module.exports = defaults;
