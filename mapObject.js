function mapObject(obj, cb) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let val = cb(obj[key]);
      obj[key] = val;
    }
  }
  return obj;
}
module.exports = mapObject;
