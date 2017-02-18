var utils = require("utils");
var constants = require("constants");
var TestComponent = require('examples/TestHBSComponent');
describe("Testing Utils", function () {
  it("resolveNodeType should return COMPONENT for a component vnode", function () {
    var vnode = {
      nodename: TestComponent
    };
    expect(utils.resolveNodeType(vnode)).toEqual(constants.nodeTypes.COMPONENT);
  });
  it("resolveNodeType should return TEMPLATE for a template vnode", function () {
    var vnode = {
      nodename: function(){}
    };
    expect(utils.resolveNodeType(vnode)).toEqual(constants.nodeTypes.TEMPLATE);
  });

  it("resolveNodeType should return HTML_ELEMENT for a html vnode", function (){
    var vnode = {
      nodename: "h1"
    };
    expect(utils.resolveNodeType(vnode)).toEqual(constants.nodeTypes.HTML_ELEMENT);
  });
});
