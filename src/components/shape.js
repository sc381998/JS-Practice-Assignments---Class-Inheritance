// declare class

class Shape {
  constructor(props) {
    color: props;
  }
  calculateArea() {
    return "overRide the shape module Calculate Area";
  }
  drawShape() {
    return "shape draw";
  }
}

// export class using module.exports
module.exports = {
  class: Shape
};

// export class using module.exports
