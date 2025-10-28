import React from 'react';
import './ClaimHistroy.css';

const ClaimHistory = () => {
  const claimData = [
    { id: 1, songName: 'Song Title One', isrc: 'INV1234567', videoLink: '#', channelLink: 'Channel Name A', date: '12 Sep 2025', time: '07:21 PM' },
    { id: 2, songName: 'Another Song Here', isrc: 'INV1234568', videoLink: '#', channelLink: 'Channel Name B', date: '12 Sep 2025', time: '07:20 PM' },
    { id: 3, songName: 'Third Track', isrc: 'INV1234569', videoLink: '#', channelLink: 'Channel Name C', date: '08 Sep 2025', time: '07:40 PM' },
    { id: 4, songName: 'My Awesome Beat', isrc: 'INV1234570', videoLink: '#', channelLink: 'Channel Name D', date: '08 Sep 2025', time: '11:36 AM' },
    { id: 5, songName: 'Summer Vibes', isrc: 'INV1234571', videoLink: '#', channelLink: 'Channel Name E', date: '08 Sep 2025', time: '11:34 AM' },
    { id: 6, songName: 'Night Drive Lo-fi', isrc: 'INV1234572', videoLink: '#', channelLink: 'Channel Name F', date: '08 Sep 2025', time: '11:33 AM' },
    { id: 7, songName: 'Coding Music', isrc: 'INV1234573', videoLink: '#', channelLink: 'Channel Name G', date: '25 Aug 2025', time: '12:32 PM' },
    { id: 8, songName: 'Focus Flow', isrc: 'INV1234574', videoLink: '#', channelLink: 'Channel Name H', date: '04 Aug 2025', time: '03:20 PM' },
    { id: 9, songName: 'Rainy Days', isrc: 'INV1234575', videoLink: '#', channelLink: 'Channel Name I', date: '31 Jul 2025', time: '04:24 PM' },
    { id: 10, songName: 'Last Entry Song', isrc: 'INV1234576', videoLink: '#', channelLink: 'Channel Name J', date: '28 Jul 2025', time: '02:47 PM' },
  ];

  return (
    <div className="claim-history-container">
      <div className="table-controls">
        <div className="entries-control">
          <label htmlFor="show-entries">Show</label>
          <select id="show-entries" name="show-entries">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span>entries</span>
        </div>
        <div className="search-control">
          <label htmlFor="search">Search:</label>
          <input type="search" id="search" />
        </div>
      </div>

      <div className="table-wrapper">
        <table className="claim-history-table">
          <thead>
            <tr>
              <th>#</th>
              <th>SONG NAME</th>
              <th>ISRC</th>
              <th>VIDEO LINK</th>
              <th>CHANNEL LINK</th>
              <th>DATE & TIME</th>
            </tr>
          </thead>
          <tbody>
            {claimData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.songName}</td>
                <td>{row.isrc}</td>
                <td className="video-link-cell">
                  <a href={row.videoLink}>Click to view video</a>
                </td>
                <td>{row.channelLink}</td>
                <td className="date-time-cell">
                  <div className="date">{row.date}</div>
                  <div className="time">{row.time}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClaimHistory;