var nodeTypes = require('constants').nodeTypes;
module.exports = {
  resolveNodeType: function (vnode) {
      var vnodeType;
      if ( typeof vnode.nodename === "function" ) {
        if (typeof vnode.nodename.prototype.render === "function") {
          vnodeType = nodeTypes.COMPONENT;
        } else {
          vnodeType = nodeTypes.TEMPLATE;
        }
      } else if (typeof vnode.nodename === "string") {
        vnodeType = nodeTypes.HTML_ELEMENT;
      }
      return vnodeType;
  }
};
