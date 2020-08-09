import React from 'react';
import RelatedArtist from './RelatedArtist';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';

const RelatedArtists = ({ relatedArtists, changeId }) => {
  return (
    <div className="container">
      <ScrollAnimation
        animateIn="animate__animated animate__fadeInDown"
        duration={1}
        animateOnce={true}
      >
        <h2 className="mb">Related Artists</h2>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__animated animate__fadeIn"
        duration={1.5}
        animateOnce={true}
      >
        <div className="grid-2">
          {relatedArtists.map((artist) => (
            <RelatedArtist
              key={artist.id}
              artist={artist}
              changeId={changeId}
            />
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
};

RelatedArtists.propTypes = {
  relatedArtists: PropTypes.array.isRequired,
  changeId: PropTypes.func.isRequired,
};

export default RelatedArtists;
