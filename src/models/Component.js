function Component () {}

/**
* Upper case is freakin important
* If you reference a component by a lowercase name
* babel jsx transformer treats it as a regular html element
* and as a result you might not see your component rendered.
* Whenever you reference any component in render, make sure it's name
* starts with an UpperCase letter.
*/
Component.create = function (spec) {
  function comp () {
    this.state = spec.getInitialState ? spec.getInitialState() : {};
    this.props = spec.getDefaultProps ? spec.getDefaultProps() : {};
  }

  var cb = function () {};
  cb.prototype = Component.prototype;
  comp.prototype = new cb();
  comp.prototype.constructor = comp;

  for ( var key in spec ) {
    if (spec.hasOwnProperty(key) && typeof spec[key] === "function") {
      comp.prototype[key] = spec[key];
    }
  }
  return comp;
}

module.exports = Component;
