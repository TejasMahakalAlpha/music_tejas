import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { FaYoutube, FaCalendarAlt, FaCoins, FaRupeeSign, FaPlus } from 'react-icons/fa';

const artists = [
  { type: 'image', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xllRFux6zAUG05Q2BWGJsBZ8fwzMpwp2Fg&s', username: 'Natalie Portman', name: 'Traditional' },

 { type: 'image',src:'https://m.media-amazon.com/images/M/MV5BNjk1M2RmODAtMjE0Ny00N2U0LWIwNWYtZTAxMDFiMzk1MjU5XkEyXkFqcGc@._V1_.jpg', username: 'Natalie Portman', name: 'Traditional' },
 
 { type: 'image', src: 'https://hips.hearstapps.com/hmg-prod/images/natalie-portman-attends-netflixs-may-december-los-angeles-news-photo-1704652669.jpg?crop=0.635xw:0.955xh;0.103xw,0.0452xh&resize=640:*', username: 'Natalie Portman', name: 'Traditional' },

  { type: 'image',src:'https://www.instyle.com/thmb/q3EskYHwwy-SiaLoWhvUERyaAgo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2216363499-b0ebfc7d1cf744e2adec170703d37596.jpg', username: 'Natalie Portman', name: 'Traditional' },

 { type: 'image',src:'https://assets.vogue.com/photos/65e20003a49bdf770fdb9883/master/w_2560%2Cc_limit/F001%2520MD%2520PARFUM%252024%2520BTS%252013E_L4_RVB.jpg', username: 'Natalie Portman', name: 'Traditional' },
 
 { type: 'image',src:'https://fashionmagazine.mblycdn.com/fm/resized/2025/09/w1200/BEAUTY_MissDior_01forwebholdingimage_0925.jpg', username: 'Natalie Portman', name: 'Traditional' },

 { type: 'image',src:'https://cdn.britannica.com/86/255786-050-5A8D7B3A/actress-natalie-portman-attends-christian-dior-haute-couture-paris-fashion-week.jpg', username: 'Natalie Portman', name: 'Traditional' },
 
 { type: 'image', src: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2008/02/28/18/17953.jpg', username: 'Natalie Portman', name: 'Traditional' },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <div className="welcome-logo">TM</div>
          <h1>
            Welcome back, <strong>Tejas Mahakal</strong>
          </h1>
        </div>
        <div className="header-right">
          <div className="monetization-tag">
            Monetization: <span>Sound Recording</span>
          </div>
          <div className="credits-info">
            #19 Annual Limitless Label Credits, unlimited
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="card-header">
              <h3>LIVE RELEASES</h3>
            </div>
            <p className="main-stat">1222</p>
            <div className="sub-stats">
              <div className="sub-stat-item">
                <span>Under Verification</span>
                <span className="status-dot yellow"></span>
              </div>
              <div className="sub-stat-item">
                <span>Recently Approved</span>
                <span className="status-dot green"></span>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="card-header">
              <h3>ISSUES</h3>
            </div>
            <p className="main-stat">2</p>
            <div className="sub-stats">
              <div className="sub-stat-item">
                <span>On Hold</span>
                <span className="status-dot red"></span>
              </div>
              <div className="sub-stat-item">
                <span>Rejected</span>
                <span className="status-dot red"></span>
              </div>
            </div>
          </div>

          <div className="stat-card earnings-card">
            <h3>LIFETIME EARNINGS</h3>
            <div className="earnings-amount">
              <FaRupeeSign />
              <h2>25L</h2>
            </div>
            <p className="card-footer">Updated Aug, 17 2025</p>
          </div>
        </div>

        <div className="actions-grid">
          <Link to="/CreateNewPage" className="create-release-btn">
            <FaPlus /> Create New Release
            <span>Upload Single</span>
          </Link>

          <div className="stat-card icon-card">
            <FaYoutube className="card-icon youtube" />
            <h4>YouTube Content ID (U.G.C)</h4>
            <p className="card-footer">Top Earning Platform</p>
          </div>

          <div className="stat-card icon-card">
            <FaCalendarAlt className="card-icon" />
            <h4>Aug, 17 2025</h4>
            <p className="card-footer">Report Updated on</p>
          </div>

          <div className="stat-card icon-card">
            <FaCoins className="card-icon gold" />
            <h4>Aug, 20 2025</h4>
            <p className="card-footer">Last Payment</p>
          </div>
        </div>

        <section className="artists-section">
          <h2>Your Artists</h2>
          <div className="artists-list">
            <div className="artist-profile add-artist">
              <div className="artist-avatar">
                <FaPlus />
              </div>
              <p>Expand roster</p>
            </div>
            {artists.map((artist, index) => (
              <div className="artist-profile" key={index}>
                <div className="artist-avatar">
                  {artist.type === 'image' ? (
                    <img src={artist.src} alt="artist" />
                  ) : (
                    <span>{artist.initials}</span>
                  )}
                </div>
                <p>{artist.username}</p>
                <p>{artist.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
