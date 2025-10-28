import React from 'react';
import './myArtists.css';

const MyArtists = () => {
  const artistsData = [
    { name: 'Shaan', spotify: 'spotify_1', appleId: '123456789', facebook: 'N/A', instagram: 'insta_1', tracks: 1, hasProfile: true, avatarUrl: 'https://pbs.twimg.com/profile_images/1325662669085437952/a-z7pbpU_400x400.jpg' },
    { name: 'Krishnakumar Kunnath', spotify: 'spotify_2', appleId: '123456789', facebook: 'N/A', instagram: 'insta_2', tracks: 1, hasProfile: true, avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/KK_%28124%29.jpg/250px-KK_%28124%29.jpg' },
    { name: 'Arijit Singh', spotify: 'new', appleId: '123456789', facebook: 'N/A', instagram: 'insta_3', tracks: 1, hasProfile: true, avatarUrl: 'https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7' },
    { name: 'Sukhwinder Singh', spotify: 'N/A', appleId: 'N/A', facebook: 'N/A', instagram: 'N/A', tracks: 0, hasProfile: false, avatarUrl: 'https://i.scdn.co/image/ab6761610000e5ebc89e803f887e3829819bf82a' },
    { name: 'Abhijeet', spotify: 'N/A', appleId: 'N/A', facebook: 'N/A', instagram: 'N/A', tracks: 2, hasProfile: false, avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXRD5Ol3tWjmz9BeH5q4dx_BPYjeH-JrmDQ&s' },
    { name: 'A. R. Rahman', spotify: 'N/A', appleId: 'N/A', facebook: 'N/A', instagram: 'N/A', tracks: 1, hasProfile: false, avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Nenje_Ezhu_at_Chennai_%28cropped%29.jpg'},
    { name: 'Shankar Mahadevan', spotify: 'new', appleId: '1836567682', facebook: 'N/A', instagram: 'N/A', tracks: 1, hasProfile: true, avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvczzmaSIm3GsCKsePd-UK8_xrwt-Ls3cXA&s' },
  ];

  return (
    <div className="artists-container">
      <div className="table-controls">
        <div className="entries-selector">
          <label htmlFor="entries">Show </label>
          <select id="entries" name="entries">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <span> entries</span>
        </div>
        <div className="search-bar">
          <label htmlFor="search">Search: </label>
          <input type="text" id="search" />
        </div>
      </div>

      <table className="artists-table">
        <thead>
          <tr>
            <th className="avatar-col"></th>
            <th>NAME</th>
            <th>SPOTIFY</th>
            <th>APPLE ID</th>
            <th>FACEBOOK</th>
            <th>INSTAGRAM</th>
            <th>TRACKS</th>
            <th className="actions-col"></th>
          </tr>
        </thead>
        <tbody>
          {artistsData.map((artist, index) => (
            <tr key={index}>
              <td>
                <div className="artist-avatar">
                  {artist.avatarUrl ? <img src={artist.avatarUrl} alt={artist.name} /> : <div className="avatar-placeholder"></div>}
                </div>
              </td>
              <td data-label="Name">{artist.name}</td>
              <td data-label="Spotify">{artist.spotify}</td>
              <td data-label="Apple ID">{artist.appleId}</td>
              <td data-label="Facebook">{artist.facebook}</td>
              <td data-label="Instagram">{artist.instagram}</td>
              <td data-label="Tracks">{artist.tracks}</td>
              <td>
                <div className="action-buttons">
                  {artist.hasProfile && <button className="btn-profile">Profile</button>}
                  <button className="btn-edit">Edit Profile</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyArtists;