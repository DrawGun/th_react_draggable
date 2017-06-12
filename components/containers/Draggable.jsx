class Draggable extends React.Component {

  constructor(props) {
    super(props);

    const { pos } = this.props
    this.state = { dragging: false, pos }

    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
  }

  render() {
    const { children } = this.props
    const { pos } = this.state
    const divStyle = {
      cursor: "pointer",
      position: "absolute",
      left: `${pos.x}px`,
      top: `${pos.y}px`,
      border: "1px solid grey",
      width: "100px",
      height: "100px"
    }

    return (
      <div
        style={divStyle}
        className="draggable"
        onMouseDown={this._onMouseDown}
        onMouseUp={this._onMouseUp}
        onMouseMove ={this._onMouseMove}>

        { children }
      </div>
    )
  }

  _onMouseDown(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ dragging: true, offsetX: e.nativeEvent.offsetX, offsetY: e.nativeEvent.offsetY});
  };

  _onMouseUp(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ dragging: false })
  };

  _onMouseMove(e) {
    e.stopPropagation();
    e.preventDefault();

    if(this.state.dragging){
      this.setState({ pos: { x: e.pageX - this.state.offsetX, y: e.pageY - this.state.offsetY } })
    }
  };


};

Draggable.defaultProps = {
  pos: { x: 100, y: 100 }
};
