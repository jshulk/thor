var Vnode = require("models/Vnode.js");
var stack = [];
module.exports = function h(nodename, attributes) {
  var children, i, simple, lastSimple, child;
  for (i=arguments.length; i-- > 2; ) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) instanceof Array) {
			for (i=child.length; i--; ) stack.push(child[i]);
		}
		else if (child!=null && child!==true && child!==false) {
			if (typeof child=='number') child = String(child);
			simple = typeof child=='string';
			if (simple && lastSimple) {
				children[children.length-1] += child;
			}
			else {
				(children || (children = [])).push(child);
				lastSimple = simple;
			}
		}
	}

  return new Vnode(nodename, attributes || undefined, children || []);

};
