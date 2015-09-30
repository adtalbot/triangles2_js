describe('triangles', function() {
  it("is not a triangle if the sum of two sides is less than the length of the third side", function() {
    expect(triangles(3,2,8)).to.equal("not a triangle");
  });
  it("is equilateral if all sides are the same length", function() {
    expect(triangles(3,3,3)).to.equal("equilateral");
  });
  it("is isosceles if two sides are the same length", function() {
    expect(triangles(3,3,1)).to.equal("isosceles");
  });
  it("is scalene if no sides are the same length", function() {
    expect(triangles(3,4,6)).to.equal("scalene");
  });
});
