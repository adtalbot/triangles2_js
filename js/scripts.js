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

$(document).ready(function() {
  $("form#triangles").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    var type = triangles(side1,side2,side3);

    $(".side1").text(side1);
    $(".side2").text(side2);
    $(".side3").text(side3);
    $(".type").text(type);

    $("#result").show();
    event.preventDefault();
  });
});
