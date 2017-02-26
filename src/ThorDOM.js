var utils = require("utils"),
    nodeTypes = require('constants').nodeTypes;
    window.componentRegistry = {};


function render (vnode, parent, component) {
  if (vnode) {
    if (component) {
      component.base = parent;
      parent.__component = component;
    }
    if (typeof vnode === "string") {
      var textNode = document.createTextNode(vnode);
      parent.appendChild(textNode);
    } else {
      var nodeType = utils.resolveNodeType(vnode);
      if (nodeType === nodeTypes.COMPONENT) {
        handleComponent(vnode, parent, component);
      }
      else if (nodeType === nodeTypes.TEMPLATE) {
        handleTemplate(vnode, parent, component);
      }
      else if (nodeType === nodeTypes.HTML_ELEMENT) {
        handleElement(vnode, parent, component);
      }
    }

    if ( vnode.children && vnode.children.length) {
      for ( var i = 0; i < vnode.children; i++ ) {
        var children = vnode.children[i];
        render(children, parent, component);
      }
    }
  }
}

function handleComponent (vnode, parent, component) {
  createOrUpdateComponent(vnode, parent, component);
}

function handleTemplate (vnode, parent, component) {
  var htmlElement = vnode.nodename(vnode.attributes);
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlElement;
  tempDiv = tempDiv.firstChild;
  parent.appendChild(tempDiv);
  if (component) {
    component.base = parent;
    parent.__component = component;
  }
  if ( vnode.children && vnode.children.length) {
    for ( var i = 0; i < vnode.children; i++ ) {
      var children = vnode.children[i];
      render(children, htmlElement, component);
    }
  }
}

function handleElement (vnode, parent, component) {
  var htmlElement = document.createElement(vnode.nodename);
  if (vnode.attributes) {
    for (var key in vnode.attributes) {
      htmlElement.setAttribute(key, vnode.attributes[key]);
    }
  }
  parent.appendChild(htmlElement);
  if (component) {
    component.base = parent;
    parent.__component = component;
  }
  if (vnode.children) {
    for (var i = 0; i < vnode.children.length; i++) {
      var children = vnode.children[i];
      render(children, htmlElement, component);
    }
  }

}

function createOrUpdateComponent(vnode, parent, parentComponent) {
  var instance;
  if (componentRegistry[vnode.nodename.name]) {
    instance = componentRegistry[vnode.nodename.name];
  } else {
    instance = new vnode.nodename();
    componentRegistry[vnode.nodename.name] = instance;
  }
  if (parentComponent) {
    parentComponent.__component = instance;
  }
  render(instance.render(), parent, instance);

}


module.exports = {
  render: render
};
