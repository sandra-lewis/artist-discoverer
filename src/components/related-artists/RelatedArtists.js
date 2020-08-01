import React from 'react';
import RelatedArtist from './RelatedArtist';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';

const RelatedArtists = ({ relatedArtists, changeId }) => {
  return (
    <div className="container">
      <ScrollAnimation
        animateIn="animate__animated animate__fadeInDown"
        duration={2}
        animateOnce={true}
      >
        <h2 className="mb">Related Artists</h2>
      </ScrollAnimation>
      <div className="grid-2">
        {relatedArtists.map((artist) => (
          <RelatedArtist key={artist.id} artist={artist} changeId={changeId} />
        ))}
      </div>
    </div>
  );
};

RelatedArtists.propTypes = {
  relatedArtists: PropTypes.array.isRequired,
  changeId: PropTypes.func.isRequired,
};

export default RelatedArtists;
