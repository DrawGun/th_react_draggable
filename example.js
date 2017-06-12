<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<script src="https://fb.me/react-15.1.0.js"></script>
<script src="https://fb.me/react-dom-15.1.0.js"></script>
<div id="app"></app>
  </body>
</html>

===============================ES6/Babel========================================

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


class Block extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          src={this.props.src}
          width={this.props.width}
          height={this.props.height}
          alt={this.props.alt} />
      </div>
    )
  }

};

Block.defaultProps = {
  src: "http://s7d2.scene7.com/is/image/PetSmart/PB0101_HERO-Cat-VitaminsWellness-20160818?$sclp-banner-main_large$",
  width: "100px",
  height: "100px",
  alt: "Cat"
};

ReactDOM.render(
  <Draggable>
    <Block />
  </Draggable>,
  document.getElementById("app")
);
