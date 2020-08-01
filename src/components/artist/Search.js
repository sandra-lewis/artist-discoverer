import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchArtist }) => {
  const [artist, setArtist] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (artist !== '') {
      searchArtist(artist);
      setArtist('');
    }
  };

  const onChange = (e) => setArtist(e.target.value);

  return (
    <form onSubmit={onSubmit} className="container pt-4">
      <input
        type="text"
        name="search-artist"
        value={artist}
        onChange={onChange}
        placeholder="Search Artist"
      />
      <input type="submit" value="&#xf002;" />
    </form>
  );
};

Search.propTypes = {
  searchArtist: PropTypes.func.isRequired,
};

export default Search;
