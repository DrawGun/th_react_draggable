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
