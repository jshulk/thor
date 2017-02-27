var h = require("h");
var HelloTemplate = require("templates/hello.hbs");
var TestComponent = require("./TestComponent");
var GreetingComponent = require("./GreetingComponent");
var Thor = require("thor");
class TestHBSComponent extends Thor.Component {
  render () {
    return (
      <div id="abc">
        <HelloTemplate />
        <TestComponent />
        <GreetingComponent />
      </div>
    );
  }
}

module.exports = TestHBSComponent;
