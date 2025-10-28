import React from 'react';
import './ReleaseFlow.css';
import CreateNewPage from './CreateNewPage';
// import Sidebar from '../components/Sidebar';

const releases = [
  { id: 1, title: 'Nights of Wonder', artist: 'Celestial Beats', type: 'Album', status: 'Released' },
  { id: 2, title: 'Cyber Dreams', artist: 'Synth Rider', type: 'Single', status: 'Review' },
  { id: 3, title: 'Ocean Deep', artist: 'Mariana', type: 'EP', status: 'Released' },
  { id: 4, title: 'Untitled Project', artist: 'Your Artist Name', type: 'Single', status: 'Draft' },
];

function ReleaseFlow() {
  const getStatusClass = (status) => {
    return status.toLowerCase().replace(' ', '-');
  };

  return (
    <>
      <CreateNewPage />

      <div className="page-with-sidebar-layout">
        {/* <Sidebar /> */}

        <div className="release-flow-container">
          <div className="release-header">
            <h1>Your Releases</h1>
            <button className="btn btn-primary">Create New Release</button>
          </div>

          <div className="releases-list">
            <table className="releases-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Artist</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {releases.map((release) => (
                  <tr key={release.id}>
                    <td data-label="Title">{release.title}</td>
                    <td data-label="Artist">{release.artist}</td>
                    <td data-label="Type">{release.type}</td>
                    <td data-label="Status">
                      <span className={`status-badge ${getStatusClass(release.status)}`}>
                        {release.status}
                      </span>
                    </td>
                    <td data-label="Actions">
                      <div className="action-buttons">
                        <button className="btn-action edit">Edit</button>
                        <button className="btn-action delete">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReleaseFlow;