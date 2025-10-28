import React from 'react';
import { Link } from 'react-router-dom';
import './CreateNewPage.css';
// import Sidebar from '../components/Sidebar';

function CreateNewPage() {
  return (
    <div className='page-with-sidebar-layout'>
      {/* <Sidebar/> */}
      <div className='main-content-area'>
        <div className='create-new-page'>
          <Link to="/Guidlines">User Asset</Link>
          <Link to="/AddArtistDetails">Release Date Details</Link>
          <Link to="/ReleaseDateDetails">Add Song Details</Link>
          <Link to="/SongDetails">Add Artist Details</Link>
          <Link to="/SelectPlatform">Select Platform</Link>
          <Link to="/ReleaseFlow">Review Upload</Link>
        </div>
        
      </div>
    </div>
  );
}

export default CreateNewPage;
