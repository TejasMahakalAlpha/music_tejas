import React from 'react';
import './PromotionsPanel.css';

const promotedSongs = [
  {
    id: 1,
    rank: 6,
    albumArtUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/df/50/67/df5067d8-1f88-0a39-274e-375cb065f1a2/SRK.jpg/600x600bf-60.jpg',
    title: 'Devdas',
    artist: 'WMI Records',
    playlistLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png',
    date: '15 Jan, 2025',
    pagination: '1/6',
    bgColor: '#2a5b53',
    logoUrl: 'https://t4.ftcdn.net/jpg/07/53/58/81/360_F_753588167_W30rYUoyNIkO702vftdkgPf0UhBufpmw.jpg',
  },
  {
    id: 2,
    rank: 43,
    albumArtUrl: 'https://i.ytimg.com/vi/sA8TgLBmH20/maxresdefault.jpg',
    title: 'Chalte Chalte',
    artist: 'WM Records',
    playlistLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png',
    date: '21 Feb, 2025',
    pagination: '2/6',
    bgColor: '#4a413a',
    logoUrl: 'https://t4.ftcdn.net/jpg/07/53/58/81/360_F_753588167_W30rYUoyNIkO702vftdkgPf0UhBufpmw.jpg',
  },
  {
    id: 3,
    rank: 1,
    albumArtUrl: 'https://s.saregama.tech/image/c/fw_485/2/94/0a/shahrukh-khan_1400x1400_1448608469.jpg',
    title: 'DDLJ',
    artist: 'WMI Records',
    playlistLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png',
    date: '15 Jan, 2025',
    pagination: '3/6',
    bgColor: '#2a5b53',
    logoUrl: 'https://t4.ftcdn.net/jpg/07/53/58/81/360_F_753588167_W30rYUoyNIkO702vftdkgPf0UhBufpmw.jpg',
  },
  {
    id: 4,
    rank: 3,
    albumArtUrl: 'https://c.saavncdn.com/643/The-King-Of-Romance-Shahrukh-Khan-Hindi-2022-20221101131002-500x500.jpg',
    title: 'Happy New Year',
    artist: 'WM Records',
    playlistLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png',
    date: '21 Feb, 2025',
    pagination: '4/6',
    bgColor: '#4a413a',
    logoUrl: 'https://t4.ftcdn.net/jpg/07/53/58/81/360_F_753588167_W30rYUoyNIkO702vftdkgPf0UhBufpmw.jpg',
  },
  {
    id: 5,
    rank: 16,
    albumArtUrl: 'https://s.saregama.tech/image/c/fw_485/d/4d/10/jaadu-teri-nazar-shahrukh-khan_1466604391.jpg',
    title: 'DDLJ',
    artist: 'WMI Records',
    playlistLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png',
    date: '15 Jan, 2025',
    pagination: '5/6',
    bgColor: '#2a5b53',
    logoUrl: 'https://t4.ftcdn.net/jpg/07/53/58/81/360_F_753588167_W30rYUoyNIkO702vftdkgPf0UhBufpmw.jpg',
  },
  {
    id: 6,
    rank: 13,
    albumArtUrl: 'https://c.saavncdn.com/989/Don-2-Hindi-2011-20221212014337-500x500.jpg',
    title: 'Don 2',
    artist: 'WM Records',
    playlistLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png',
    date: '21 Feb, 2025',
    pagination: '6/6',
    bgColor: '#4a413a',
    logoUrl: 'https://t4.ftcdn.net/jpg/07/53/58/81/360_F_753588167_W30rYUoyNIkO702vftdkgPf0UhBufpmw.jpg',
  },
];

const PromotionsPanel = () => {
  const duplicatedSongs = [...promotedSongs, ...promotedSongs];

  return (
    <div className="promoted-carousel-page">
      <main className="promoted-carousel-container">
        <h1 className="promoted-carousel-title">Your Promoted Songs</h1>
        <div className="promoted-carousel-slider">
          <div className="promoted-carousel-track">
            {duplicatedSongs.map((song, index) => (
              <div className="promoted-carousel-card" key={`${song.id}-${index}`}>
                <h2 className="promoted-carousel-card-title">PLAYLISTED ON NO.{song.rank}</h2>
                <div className="promoted-carousel-card-content" style={{ backgroundColor: song.bgColor }}>
                  <img src={song.logoUrl} className="promoted-carousel-bg-logo" alt="" />
                  <div className="promoted-carousel-content-wrapper">
                    <img src={song.albumArtUrl} alt={song.title} className="promoted-carousel-album-art" />
                    <div className="promoted-carousel-song-details">
                      <span className="promoted-carousel-song-label">Song</span>
                      <span className="promoted-carousel-song-title">{song.title}</span>
                      <span className="promoted-carousel-song-artist">{song.artist}</span>
                    </div>
                    <div className="promoted-carousel-playlist-info">
                      <img src={song.playlistLogoUrl} alt="Playlist Logo" className="promoted-carousel-playlist-logo" />
                      <span className="promoted-carousel-playlist-date">{song.date}</span>
                    </div>
                  </div>
                  <span className="promoted-carousel-pagination">{song.pagination}</span>

                </div>
                
              </div>
              
            ))}
          </div>
        </div>
      </main>
       
    </div>
   
  );
};

export default PromotionsPanel;