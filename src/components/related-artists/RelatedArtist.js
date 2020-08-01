import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';

const RelatedArtist = ({ artist, changeId }) => {
  const onClick = () => changeId(artist.id);

  return (
    <ScrollAnimation
      animateIn="animate__animated animate__fadeInUp"
      duration={2}
      animateOnce={true}
    >
      <div onClick={onClick} className="btn">
        {artist.images[1].url && (
          <img src={artist.images[1].url} alt="" className="artist-img" />
        )}
        {artist.name}
      </div>
    </ScrollAnimation>
  );
};

RelatedArtist.propTypes = {
  artist: PropTypes.object.isRequired,
  changeId: PropTypes.func.isRequired,
};

export default RelatedArtist;
