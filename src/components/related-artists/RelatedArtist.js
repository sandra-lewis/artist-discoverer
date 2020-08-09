import React from 'react';
import PropTypes from 'prop-types';

const RelatedArtist = ({ artist, changeId }) => {
  const onClick = () => changeId(artist.id);

  return (
    <div onClick={onClick} className="btn">
      {artist.images[1].url && (
        <img src={artist.images[1].url} alt="" className="artist-img" />
      )}
      {artist.name}
    </div>
  );
};

RelatedArtist.propTypes = {
  artist: PropTypes.object.isRequired,
  changeId: PropTypes.func.isRequired,
};

export default RelatedArtist;
