import React, { useState } from 'react';
import './RevenueData.css';
import ExportDataModal from './ExportData'; 

const RevenueData = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    { month: 'JAN-22', jiosaavn: '14.53', meta: '84.36', spotify: '68.32', youtube_ugc: 'NA', youtube_cms: 'NA', total: '10.01' },
    { month: 'FEB-22', jiosaavn: '10.84', meta: '50.04', spotify: '53.38', youtube_ugc: 'NA', youtube_cms: 'NA', total: '17' },
    { month: 'MAR-22', jiosaavn: '10.01', meta: '43.10', spotify: '43.59', youtube_ugc: 'NA', youtube_cms: 'NA', total: '25' },
    { month: 'APR-22', jiosaavn: <span className="data-blue">9.76</span>, meta: '72.46', spotify: '64.26', youtube_ugc: 'NA', youtube_cms: 'NA', total: '25' },
    { month: 'MAY-22', jiosaavn: '14.22', meta: '60.13', spotify: '67.84', youtube_ugc: 'NA', youtube_cms: 'NA', total: '33' },
    { month: 'JUN-22', jiosaavn: '9.14', meta: '21.80', spotify: <span className="data-green">41.37</span>, youtube_ugc: 'NA', youtube_cms: 'NA', total: '56' }
  ];

  const totals = {
    jiosaavn: '37.93',
    meta: '272.54',
    spotify: '320.92',
    youtube_ugc: '10.56',
    youtube_cms: '18.15',
    total: '15.18'
  };

  return (
    <> 
      <div className="revenue-component-container">
        <div className="header-controls">
          <div className="revenue-data-selector">
            <label htmlFor="labels">Revenue Data for</label>
            <div className="select-wrapper">
              <select id="labels" name="labels">
                <option value="all-labels">All Labels</option>
                <option value="Music Records">Music Records</option>
                <option value="MusicRecordsPvtLtd">Music Records Pvt Ltd</option>
                <option value="WMRecords">WMRecords</option>
              </select>
            </div>
          </div>
          <div className="platform-toggle">
            <button className="toggle-btn active">Major Platforms</button>
            <button className="toggle-btn">All Platform</button>
          </div>
         
          <button className="btn-export" onClick={() => setIsModalOpen(true)}>
            Export Data
          </button>
        </div>

        <div className="table-wrapper">
         
          <table className="revenue-table">
          <thead>
            <tr>
              <th></th>
              <th>
                <div>
                  <img src="https://static.vecteezy.com/system/resources/previews/067/941/728/non_2x/jiosaavn-logo-rounded-hd-free-png.png" alt="jiosavn" />
                  <span>JIOSAAVN</span>
                </div>
              </th>
              <th>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/256/6033/6033716.png" alt="metaa" />
                  <span>META (FACEBOOK, INSTAGRAM, WHATSAPP)</span>
                </div>
              </th>
              <th>
                <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="spotify" />
                  <span>SPOTIFY</span>
                </div>
              </th>
              <th>
                <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" alt="yt" />
                  <span>YOUTUBE CONTENT ID (U.G.C)</span>
                </div>
              </th>
              <th>
                <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="yt" />
                  <span>YOUTUBE CHANNEL, IN CMS</span>
                </div>
              </th>
              <th>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/2769/2769454.png" alt="rs" />
                  <span>TOTAL IN (INR)</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="month-cell">{row.month}</td>
                <td>{row.jiosaavn}</td>
                <td>{row.meta}</td>
                <td>{row.spotify}</td>
                <td>{row.youtube_ugc}</td>
                <td>{row.youtube_cms}</td>
                <td className="total-cell">{row.total}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="month-cell">TOTAL</td>
              <td>{totals.jiosaavn}</td>
              <td>{totals.meta}</td>
              <td>{totals.spotify}</td>
              <td>{totals.youtube_ugc}</td>
              <td>{totals.youtube_cms}</td>
              <td className="total-cell">{totals.total}</td>
            </tr>
          </tfoot>
        </table>
        </div>

        <div className="note-box">
          <p><strong>Note:</strong> Data figures in <span className="data-blue">blue</span> are past updates, and figures in <span className="data-green">green</span> are the latest updates. You can also hover on the figure to reveal the date when that data was updated.</p>
        </div>
      </div>

     
      <ExportDataModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default RevenueData;