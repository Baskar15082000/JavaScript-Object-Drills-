const defaultObj = require("../default");

const defaultProps = {
  name: "Bruce Wayne",
  age: 36,
  location: "Gotham",
};

const testObject = {
  name: "Bruce Wayne",
  age: 36,
  location: undefined,
};

let defaultObject = defaultObj(testObject, defaultProps);
console.log(defaultObject);
