var utils = require("utils"),
    nodeTypes = require('constants').nodeTypes,
    componentRegistry = {};


function render (vnode, parent) {
  if (vnode) {
    if (typeof vnode === "string") {
      var textNode = document.createTextNode(vnode);
      parent.appendChild(textNode);
    } else {
      var nodeType = utils.resolveNodeType(vnode);
      if (nodeType === nodeTypes.COMPONENT) {
        handleComponent(vnode, parent);
      }
      else if (nodeType === nodeTypes.TEMPLATE) {
        handleTemplate(vnode, parent);
      }
      else if (nodeType === nodeTypes.HTML_ELEMENT) {
        handleElement(vnode, parent);
      }
    }

    if ( vnode.children && vnode.children.length) {
      for ( var i = 0; i < vnode.children; i++ ) {
        var children = vnode.children[i];
        render(children, parent);
      }
    }
  }
}

function handleComponent (vnode, parent) {
  createOrUpdateComponent(vnode, parent);
}

function handleTemplate (vnode, parent) {
  var htmlElement = vnode.nodename(vnode.attributes);
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlElement;
  tempDiv = tempDiv.firstChild;
  parent.appendChild(tempDiv);
  if ( vnode.children && vnode.children.length) {
    for ( var i = 0; i < vnode.children; i++ ) {
      var children = vnode.children[i];
      render(children, htmlElement);
    }
  }
}

function handleElement (vnode, parent) {
  var htmlElement = document.createElement(vnode.nodename);
  if (vnode.attributes) {
    for (var key in vnode.attibutes) {
      htmlElement.setAttribute(key, vnode.attibutes[key]);
    }
  }
  parent.appendChild(htmlElement);
  if (vnode.children) {
    for (var i = 0; i < vnode.children.length; i++) {
      var children = vnode.children[i];
      render(children, htmlElement);
    }
  }

}

function createOrUpdateComponent(vnode, parent) {
  var instance;
  if (componentRegistry[vnode.nodename.name]) {
    instance = componentRegistry[vnode.nodename.name];
  } else {
    instance = new vnode.nodename();
    componentRegistry[vnode.nodename.name] = instance;
    render(instance.render(), parent);
  }

}


module.exports = {
  render: render
};
