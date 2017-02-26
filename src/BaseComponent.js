class BaseComponent {
  constructor(props) {
    this.props = props;
  }
  render () {
    return null;
  }
  componentWillMount () {}
  componentDidMount () {}
  componentWillReceiveProps () {}
  shouldComponentUpdate () {}
  componentWillUpdate () {}
  componentDidUpdate () {}
  componentWillUnMount () {}
}

module.exports = BaseComponent;
