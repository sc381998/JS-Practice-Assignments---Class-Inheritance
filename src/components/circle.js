// import using require
const React = require("react");
const ReactDOM = require("react-dom");
const Shape = require("./shape");
// declare class
class Circle extends Shape {
  constructor(props) {
    super(props);
  }
  calculateArea() {
    return "overRide the shape module Calculate Area";
  }
}

// export class using module.exports
module.exports = {
  class: Circle
};
