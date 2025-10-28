import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
 
const menuItems = [
  { name: 'Home', path: '/', hasArrow: false },

  { name: 'Create New Release', path: '/CreateNewPage', hasArrow: false },
  {
    name: 'My Music Business',
    hasArrow: true,
    
    submenu: [
      { name: 'All Releases', path: '/AllReleases' },
      { name: 'My Artists', path: '/myArtists' },
      { name: 'My Labels', path: '/Labels' },
    ],
  },
  // **********************************************************
  // { name: 'Analytics', path: '/Analytics', hasArrow: true },
  {
    name: 'Analytics',
     hasArrow: true ,

    submenu: [
      { name: 'Analytics', path: '/Analytics' },
      { name: 'Facebook Analytics', path: '/FacebookAnalytics' },
      { name: 'Spotify Analytics', path: '/SpotifyAnalytics' },
    ],


  },
  // *******************************************************************
  { name: 'Earnings', 
     hasArrow: true ,
    
     submenu: [
      { name: 'Month Wise Earning', path: '/MonthWiseEarnings' },

     ],
    
    },

  { name: 'Accounting & Finance', 
     hasArrow: true,
     submenu: [
      { name: 'Earning Paid To You', path: '/EarningsPage' },
      { name: 'My Bank', path: '/MyBanks' },
      { name: 'Purchase History', path: '/PurchaseHistory' },
    ],
    },
// path: '/Promotions',
  { name: 'Promotions', 
     hasArrow: true ,
    
    submenu: [
      { name: 'Promoto Your Songs', path: '/Promotions' },

     ],
    },

   { name: 'Custom Payment', path: '/CustomPayment', hasArrow: true },

  { name: 'Youtube Services',
     hasArrow: true, 
    
    submenu: [
      { name: 'Claim History', path: '/ClaimHistroy' },
      { name: 'Remove Youtube Claim', path: '/RemoveYoutubeClaim' },
    ]
    
    },

  { name: 'Help And Support',
     hasArrow: true,
    submenu: [
      { name: 'Create Ticket', path: '/HSCreateTicket' },
      { name: 'FAQ', path: '/FAQ' },
    ]
    },

  { name: 'Create Ticket', path: '/CreateTicket', hasArrow: true },

  // { name: 'Custom Purchase', path: '/CustomPurchase', hasArrow: false },
];
 
const Sidebar = ({ isOpen, setIsOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
 
  useEffect(() => {
    if (isOpen && window.innerWidth <= 992) {
      document.body.classList.add('no-scroll-when-sidebar-open');
    } else {
      document.body.classList.remove('no-scroll-when-sidebar-open');
    }
    const handleResize = () => {
      if (window.innerWidth > 992) {
        document.body.classList.remove('no-scroll-when-sidebar-open');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('no-scroll-when-sidebar-open');
    };
  }, [isOpen]);
 
  const handleDropdownClick = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };
 
  return (
    <>
      <button className="fr-sidebar-hamburger" onClick={() => setIsOpen(true)} aria-label="Open sidebar">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`fr-sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
      <aside className={`fr-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="fr-sidebar-header">
          <div className="fr-sidebar-logo-container">
            <svg className="fr-sidebar-logo" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 20L3 5H21L12 20Z" fill="#E74C3C" />
            </svg>
            <span className="fr-sidebar-brand-name">Flash Records</span>
          </div>
          <button className="fr-sidebar-close-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '<' : '>'}
          </button>
        </div>
        <nav className="fr-sidebar-nav">
          <ul className="fr-sidebar-nav-menu">
            {menuItems.map((item, index) => (
              <li key={index} className={`fr-sidebar-nav-item ${openDropdown === item.name ? 'active' : ''}`}>
                {item.submenu ? (
                  <div className="fr-sidebar-nav-link" onClick={() => handleDropdownClick(item.name)}>
                    <span>{item.name}</span>
                    {item.hasArrow && <span className="fr-sidebar-arrow">&gt;</span>}
                  </div>
                ) : (
                  <Link to={item.path} className="fr-sidebar-nav-link" onClick={() => { if (window.innerWidth <= 992) setIsOpen(false); }}>
                    <span>{item.name}</span>
                    {item.hasArrow && <span className="fr-sidebar-arrow">&gt;</span>}
                  </Link>
                )}
 
                {item.submenu && openDropdown === item.name && (
                  <ul className="fr-sidebar-submenu">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="fr-sidebar-submenu-item">
                        <Link to={subItem.path} className="fr-sidebar-submenu-link" onClick={() => { if (window.innerWidth <= 992) setIsOpen(false); }}>
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
 
export default Sidebar;
 