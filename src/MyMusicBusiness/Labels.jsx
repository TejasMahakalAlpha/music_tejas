import React from 'react';
import './Labels.css';
import { FiChevronRight } from 'react-icons/fi';
import { FaUser } from "react-icons/fa";

 
const labelData = [
  {
    id: 161,
    labelId: 'T-E-J-A-S',
    spotify: 'N/A',
    appleId: 'N/A',
    jiosaavn: 'N/A',
    instagram: 'N/A',
    tracks: 1273,
  },
];
 
const Labels = () => {
  return (
    <div className="mylabels-page-container">
      <div className="mylabels-card">
        <div className="mylabels-header">
          <div className="show-entries">
            <span>Show</span>
            <select className="entries-dropdown">
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>

            </select>
            <span>entries</span>
          </div>
          <div className="search-container">
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" className="search-input" />
          </div>
        </div>
 
        <div className="table-wrapper">
          <table className="labels-table">
            <thead>
              <tr>
                <th>
               
                </th>
                <th>#</th>
                <th>LABEL ID</th>
                <th>SPOTIFY</th>
                <th>APPLE ID</th>
                <th>JIOSAAVN</th>
                <th>INSTAGRAM</th>
                <th>TRACKS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {labelData.map((label) => (
                <tr key={label.id}>
                  <td data-label="" className="expand-icon"><FiChevronRight /></td>
                  <td data-label="#">{label.id}</td>
                  <td data-label="Label ID">{label.labelId}</td>
                  <td data-label="Spotify">{label.spotify}</td>
                  <td data-label="Apple ID">{label.appleId}</td>
                  <td data-label="JioSaavn">{label.jiosaavn}</td>
                  <td data-label="Instagram">{label.instagram}</td>
                  <td data-label="Tracks">{label.tracks}</td>
                  <td data-label="Action">
                    <button className="edit-profile-btn">Edit Profile</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
 
        <div className="mylabels-footer">
          <div className="showing-info">
            Showing 1 to 1 of 1 entries
          </div>
          <div className="pagination-controls">
            <button className="pagination-btn" disabled>Previous</button>
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Labels;
 