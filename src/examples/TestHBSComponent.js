var h = require("h");
var HelloTemplate = require("templates/hello.hbs");
var TestComponent = require("./TestComponent");
var Thor = require("thor");
class TestHBSComponent extends Thor.Component {
  render () {
    return (
      <div id="abc">
        <HelloTemplate />
        <TestComponent />
      </div>
    );
  }
}

module.exports = TestHBSComponent;
