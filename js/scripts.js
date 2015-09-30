var triangles = function(side1, side2, side3) {
  if((side1 + side2) <= (side3) || (side1 + side3) <= (side2)) {
    return "not a triangle";
  };
  if((side1 === side2) && (side1 === side3)) {
    return "equilateral";
  };
  if((side1 === side2) || (side1 === side3)) {
    return "isosceles";
  };
  if((side1 != side2) && (side1 != side3)) {
    return "scalene";
  };
};
