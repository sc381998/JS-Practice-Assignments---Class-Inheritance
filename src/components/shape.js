// declare class

// export class using module.exports//export default class Shape
module.exports = class Shape {
  constructor() {
    this.color = "red";
  }
  drawShape() {
    console.log("Drawing a shape");
  }
  calculateArea() {
    console.log("don't know area of uknown shape");
  }
};
