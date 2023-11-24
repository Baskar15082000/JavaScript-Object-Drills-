const mapObject = require("../mapObject");
const testObject = require("../data");

function cb(value) {
  return value + 10;
}

let map = mapObject(testObject, cb);
console.log(map);
