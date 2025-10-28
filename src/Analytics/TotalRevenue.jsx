import React, { useState, useEffect } from 'react';
import './TotalRevenue.css';
import { FaFacebook, FaInstagram, FaBell } from 'react-icons/fa';
import { VscHubot } from 'react-icons/vsc';

const StatCard = ({ title, children, className = '' }) => (
  <div className={`stat-card ${className}`}>
    <h4>{title}</h4>
    {title && <hr />}
    {children}
  </div>
);

const PlatformCard = ({ icon, title, revenue, percentage }) => (
  <div className="platform-card">
    <div className="platform-header">
      {icon}
      <h5>{title}</h5>
    </div>
    <div className="platform-body">
      <div className="platform-revenue">{revenue}</div>
      <p>{percentage}</p>
    </div>
  </div>
);

const TrackCard = ({ cover, title, earning }) => (
  <div className="track-card">
    <img src={cover} alt={title} className="track-cover" />
    <div className="track-info">
      <p className="track-title">{title}</p>
      <p className="track-earning">Earning: {earning}</p>
    </div>
  </div>
);

const StatCardSkeleton = ({ isRevenueCard }) => (
  <div className="stat-card">
    <div className="skeleton skeleton-text skeleton-title"></div>
    {isRevenueCard && <hr />}
    <div className={`skeleton skeleton-text ${isRevenueCard ? 'skeleton-revenue' : 'skeleton-count'}`}></div>
    {!isRevenueCard && <div className="skeleton skeleton-text skeleton-tag"></div>}
  </div>
);

const PlatformCardSkeleton = () => (
  <div className="platform-card">
    <div className="platform-header">
      <div className="skeleton skeleton-icon"></div>
      <div className="skeleton skeleton-text skeleton-title"></div>
    </div>
    <div className="platform-body">
      <div className="skeleton skeleton-text skeleton-revenue"></div>
      <div className="skeleton skeleton-text skeleton-percentage"></div>
    </div>
  </div>
);

const TrackCardSkeleton = () => (
  <div className="track-card">
    <div className="skeleton skeleton-image"></div>
    <div className="track-info">
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text skeleton-earning"></div>
    </div>
  </div>
);


const DashboardHeader = () => (
  <header className="header-bar">
    <div className="header-tag">#919 Annual Limitless Label Credits: Unlimited</div>
    {/* <div className="header-icons">
      <FaBell className="icon" />
      <div className="user-avatar">TM</div>
    </div> */}
  </header>
);

const MainStats = ({ isLoading }) => {
  if (isLoading) {
    return (
      <section className="stats-grid">
        <StatCardSkeleton isRevenueCard={true} />
        <StatCardSkeleton isRevenueCard={false} />
      </section>
    );
  }

  return (
    <section className="stats-grid">
      <StatCard title="TOTAL FACEBOOK REVENUE" className="revenue-card">
        <div className="revenue-amount">
          <span className="currency-symbol">₹</span>
          <span className="amount">2,345,678</span>
        </div>
      </StatCard>
      <StatCard title="COUNTRIES" className="countries-card">
        <div className="countries-count">188</div>
        <div className="global-reach-tag">Global reach</div>
      </StatCard>
    </section>
  );
};

const PlatformBreakdown = ({ isLoading }) => {
  if (isLoading) {
    return (
      <section className="platform-grid">
        {[...Array(3)].map((_, i) => <PlatformCardSkeleton key={i} />)}
      </section>
    );
  }

  return (
    <section className="platform-grid">
      <PlatformCard
        icon={<FaFacebook className="platform-icon fb-icon" />}
        title="FACEBOOK PRODUCTS"
        revenue="₹ 1,365 K"
        percentage="35.19% of total revenue"
      />
      <PlatformCard
        icon={<FaInstagram className="platform-icon ig-icon" />}
        title="INSTAGRAM PRODUCTS"
        revenue="₹ 1,123 K"
        percentage="49.42% of total revenue"
      />
      <PlatformCard
        icon={<VscHubot className="platform-icon other-icon" />}
        title="CROSS-PLATFORM & OTHERS"
        revenue="₹ 289 K"
        percentage="7.98% of total revenue"
      />
    </section>
  );
};

const TopPerformingTracks = ({ isLoading, tracks }) => (
  <section className="tracks-section">
    <h3 className="tracks-title">Top Performing Tracks</h3>
    <div className="tracks-grid">
      {isLoading
        ? [...Array(6)].map((_, i) => <TrackCardSkeleton key={i} />)
        : tracks.map(track => <TrackCard key={track.id} {...track} />)
      }
    </div>
  </section>
);


const TotalRevenue = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
// Totalrevenure second part
  const tracksData = [
    { id: 1, cover: 'https://image.tmdb.org/t/p/w500/lh5zibQXYH1MNqkuX8TmxyNYHhK.jpg', title: 'Midnight Bloom', earning: '1.89 K' },
    { id: 2, cover: 'https://pbs.twimg.com/media/FeePzr6WYAQWWbA.jpg:large', title: 'Starlit Echo', earning: '1.71 K' },
    { id: 3, cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KWL_1bcsXxwwn9IEXA3YWF_KfSAgnPo_Ow&s', title: 'Neon Dreams', earning: '1.45 K' },
    { id: 4, cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwikqOg7b3JG5mG6UJoRjmJ_tjF4DMd1rNdQ&s', title: 'Lost in the Sound', earning: '1.23 K' },
    { id: 5, cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVemPfzIaan4a6OdLZqFAt5OQE_AaP9_b06g&s', title: 'Urban Serenade', earning: '1.10 K' },
    { id: 6, cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTW-hWSwbjtaWnxrzLf5ANg2vhPaoIawfvMA&s', title: 'Sunset Drive', earning: '0.98 K' },
  ];

  return (
    <main className="dashboard-container">
      <DashboardHeader />
      <MainStats isLoading={isLoading} />
      <PlatformBreakdown isLoading={isLoading} />
      <TopPerformingTracks isLoading={isLoading} tracks={tracksData} />
    </main>
  );
};

export default TotalRevenue;