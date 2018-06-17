import React from 'react';

// Set up style for background image for carousel image.
const backgroundImage = {
  height: '35vh',
  background: `url(${process.env.PUBLIC_URL}/media/plates-header.jpg)`,
  backgroundSize: 'cover'
};

export const Carousel = () => {
  return (
    <div className="Category__carousel"
      style={ backgroundImage }>
      <div className="Category__tagline-container">
        <div className="Category__tagline">
          <span className="App-title">Plates</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam at ante elementum, porta neque ac, accumsan erat.
            Etiam sit amet ligula vitae ipsum volutpat vestibulum.
            Ut quis velit lorem. Nunc placerat nec.
          </p>
        </div>
      </div>
    </div>
  );
}
