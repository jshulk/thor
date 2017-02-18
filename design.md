Rendering lifecycle
1. input - (vnode, parent) output - html
2. instantiate the component if the instance does not exist already.
3. if the instance already exists look up the associated dom node and get the vdom attached to the dom node.
4. Compare updated props of the vnode with the ones present on the dom node.
5. if the attributes differ, call render again ( with new props )
6. use new vnode to generate html and update the associated dom node of the component instance.
7. If the instance was just instantiated call render and generate the html and append to the parent node.


Component Hydration
1. if window.componentRegistry is present use that as source of component information
2. componentRegistry will have objects describing whether component was rendered on the server or whether component was skipped ( above the fold rendering)
3. If the component was rendered on the server, call render and
   attach the vdom to the corresponding dom node of the component instance and
   then call some method to setup events and also trigger componentDidMount

var componentRegistry = window.componentRegistry || {};
