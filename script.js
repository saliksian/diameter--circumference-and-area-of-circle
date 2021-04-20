let rad = 20;

function diameter(radius) {
  return 2 * radius;
}
function circumference(radius) {
  return 2 * Math.PI * radius;
}
function area(radius) {
  return Math.PI * radius * radius;
}
console.log("Diameter of Circle: " + diameter(rad));
console.log("Circumference of Circle: " + circumference(rad).toFixed(3));
console.log("Area of Circle: " + area(rad).toFixed(3));
