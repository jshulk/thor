function Vnode (nodename, attributes, children) {
  this.nodename = nodename;
  this.attributes = attributes;
  this.children = children;
}

module.exports = Vnode;
