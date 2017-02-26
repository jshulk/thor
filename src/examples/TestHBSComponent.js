var h = require("h");
var HelloTemplate = require("templates/hello.hbs");
var Thor = require("thor");
class TestHBSComponent extends Thor.Component {
  render () {
    return (
      <div id="abc">
        <HelloTemplate />
      </div>
    );
  }
}

module.exports = TestHBSComponent;
