var h = require("h");
var Thor = require("thor");
class TestComponent extends Thor.Component {
  render () {
    return (
      <div id="bcd">Test component</div>
    )
  }
}

module.exports = TestComponent;
