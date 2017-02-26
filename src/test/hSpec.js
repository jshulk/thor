var h = require('h');
describe(" test h working ", function () {
  it('should return correct tree for nested components', function () {
    var TestFunction = function TestFuntion(){};
      var result = h("h1", null, h(TestFunction));
    expect(typeof result.nodename === "string").toBe(true);
    expect(Object.prototype.toString.call(result.children)).toEqual("[object Array]");
    expect(typeof result.children[0].nodename === "function").toBe(true);
  });
});
