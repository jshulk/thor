var BaseComponent = require("./BaseComponent");
module.exports = {
  create: function (config) {
    var func = function(){
      if (config.getInitialState) {
          this.state = config.getInitialState();
      }
      if (config.getDefaultProps) {
        this.props = config.getDefaultProps();
      }
    };
    var C = function () {};
    C.prototype = BaseComponent.prototype;
    func.prototype = new C();
    func.prototype.constructor = func;

    for ( var key in config ) {
      if ( config.hasOwnProperty(key) && typeof config[key] === "function" ) {
        func.prototype[key] = config[key].bind(this);
      }
    }
    return func;
  }
}
