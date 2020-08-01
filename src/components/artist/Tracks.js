import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';

const Tracks = ({ artistId }) => {
  const uri = `https://open.spotify.com/embed/artist/${artistId}`;

  return (
    <div className="container">
      <ScrollAnimation
        animateIn="animate__animated animate__fadeIn"
        duration={3}
        animateOnce={true}
      >
        <div className="iframe-box">
          <iframe
            title={artistId}
            src={uri}
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </ScrollAnimation>
    </div>
  );
};

Tracks.propTypes = {
  artistId: PropTypes.string.isRequired,
};

export default Tracks;
