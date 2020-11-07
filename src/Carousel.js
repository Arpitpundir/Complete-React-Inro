import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      photos: [],
    };
  }
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  indexClick = (event) => {
    this.setState({ active: event.target.dataset.index });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              data-index={index}
              onClick={(event) => this.indexClick(event)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
