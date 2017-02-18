var Component = require("models/Component");
var h = require("../h");
var HelloTemplate = require("templates/hello.hbs");
var TestHBSComponent = Component.create({
  render: function () {
    return (
      <div>
        <HelloTemplate />
      </div>
    );
  }
});

module.exports = TestHBSComponent;
