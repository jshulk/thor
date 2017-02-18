module.exports = BaseComponent;
function BaseComponent(){}
BaseComponent.prototype = {
  constructor: BaseComponent,
  render: function(){ return null },
  componentWillMount: function(){},
  componentDidMount: function(){},
  componentWillReceiveProps: function(){},
  shouldComponentUpdate: function(){},
  componentWillUpdate: function(){},
  componentDidUpdate: function(){},
  componentWillUnMount: function(){}
}
