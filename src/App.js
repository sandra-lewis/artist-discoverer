import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/layout/Header';
import Search from './components/artist/Search';
import Tracks from './components/artist/Tracks';
import RelatedArtists from './components/related-artists/RelatedArtists';
import Footer from './components/layout/Footer';
import 'animate.css/animate.min.css';
import './App.css';

const App = () => {
  const [token, setToken] = useState('');
  const [artistId, setArtistId] = useState('');
  const [relatedArtists, setRelatedArtists] = useState([]);

  useEffect(() => {
    getToken();
    // eslint-disable-next-line
  }, []);

  const getToken = async () => {
    try {
      const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            btoa(
              `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`
            ),
        },
        body: 'grant_type=client_credentials',
      });

      const data = await res.json();
      setToken(data.access_token);
    } catch (error) {}
  };

  const searchArtist = async (artist) => {
    try {
      const res = await fetch(
        `https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=1`,
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      if (data.artists.items[0] !== undefined) {
        setArtistId(data.artists.items[0].id);
        getRelatedArtists(data.artists.items[0].href);
      }
    } catch (error) {}
  };

  const getRelatedArtists = async (artistUrl) => {
    try {
      const res = await fetch(`${artistUrl}/related-artists`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      data.artists.length !== 0
        ? setRelatedArtists([...data.artists].slice(0, 10))
        : setRelatedArtists([]);
    } catch (error) {}
  };

  const changeId = (id) => setArtistId(id);

  return (
    <div className="wrapper">
      <Header />
      <Search searchArtist={searchArtist} />
      {!artistId && (
        <h3 className="container">
          Please enter the artist's name to view the top tracks and related
          artists.
        </h3>
      )}

      {artistId !== '' && relatedArtists.length !== 0 ? (
        <div className="grid">
          <Tracks artistId={artistId} />
          <RelatedArtists relatedArtists={relatedArtists} changeId={changeId} />
        </div>
      ) : (
        <Fragment>{artistId && <Tracks artistId={artistId} />}</Fragment>
      )}

      <div className="pt-4">
        <Footer />
      </div>
    </div>
  );
};

export default App;
