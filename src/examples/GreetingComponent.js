var Thor = require("thor"),
    h = require("h"),
    GreetingTemplate = require("templates/greeting.hbs");

class GreetingComponent extends Thor.Component {
  render () {
    return (
      <div>
        <GreetingTemplate />
      </div>
    )
  }
}

module.exports = GreetingComponent;
