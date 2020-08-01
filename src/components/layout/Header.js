import React from 'react';
import MusicalNote from '../../images/musical-note.png';

const Header = () => {
  return (
    <header>
      <img src={MusicalNote} alt="" className="music-icon" />
      <h2>Artist Discoverer</h2>
    </header>
  );
};

export default Header;
