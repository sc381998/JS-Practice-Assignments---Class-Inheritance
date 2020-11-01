import Shape from "./shape";

//export default class Circle extends Shape
module.exports = class Circle extends Shape {
  constructor() {
    //first line of subclass constructor should call superclass constructor with appropriate parameters
    super();
  }
  calculateArea() {
    console.log("Area of circle");
    return 3.14 * 5 * 5;
  }
};
