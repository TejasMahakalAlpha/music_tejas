import React from 'react';
import './AllReleases.css';
 

const releasesData = [
  {
    id: 1,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sDdZ6oItg8kPZsiSHS7NEuVTRCqrRkm6RA&s',
    song: 'Sorry Bol',
    artist: 'Thaman S',
    lyrics: 'English',
    status: 'Approved',
    actionDate: '29.09.2025',
  },
  {
    id: 2,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqXzI8tQjcCGWulgFI_uIRvgD82RZwjxsvg&s',
    song: 'Ghafoor',
    artist: 'Shilpa Rao',
    lyrics: 'Hindi',
     status: 'Approved',
    actionDate: '28.09.2025',
  },
  {
    id: 3,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYfy-MTB_NNaOxKw2ul5P8niNdjmS-1pb0Yw&s',
    song: 'Mere Khwabo Me Khyalo Me',
    artist: 'Shaan',
    lyrics: 'English',
     status: 'Approved',
    actionDate: '25.09.2025',
  },
  {
    id: 4,
    thumbnail: 'https://i.pinimg.com/736x/9a/b1/43/9ab143b116adb18b810eb031f9078d79.jpg',
    song: 'Ek Chatur Naar Title Track',
    artist: 'Kailash Kher',
    lyrics: 'Punjabi',
    status: 'Approved',
    actionDate: '24.09.2025',
  },
  {
    id: 5,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwUB_SPk4tk7QuazFU8dYx7MxmEAU5OV78Q&s',
    song: 'Midnight Drive',
    artist: 'Vikram Singh',
    lyrics: 'English',
    status: 'Approved',
    actionDate: '22.09.2025',
  },
  {
    id: 6,
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Shraddha_Kapoor_2016.jpg/250px-Shraddha_Kapoor_2016.jpg',
    song: 'Kuch Toh Hai - Female Version',
    artist: 'Anu Malik',
    lyrics: 'English',
    status: 'Approved',
    actionDate: '29.09.2025',
  },
  {
    id: 7,
    thumbnail: 'https://image.tmdb.org/t/p/w500/8yaSrPVGp07qUK4ksKhlxpmOk7T.jpg',
    song: 'Tu Meri Poori Kahani - Male Version',
    artist: 'Anu Malik ·',
    lyrics: 'Hindi',
    status: 'Approved',
    actionDate: '28.09.2025',
  },
  {
    id: 8,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8-B2B2ipq3mKaQBMfNKHboPFQwXJ2g0rdQ&s',
    song: 'Lost in the Echo',
    artist: 'Tejas Mahakal',
    lyrics: 'English',
     status: 'Approved',
    actionDate: '25.09.2025',
  },
  {
    id: 9,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZt6wb8isPK5zFe6MAbWd5QzXVEE2TX_caUw&s',
    song: 'Bhoolane Ki Tumko',
    artist: 'Anu Malik',
    lyrics: 'Punjabi',
     status: 'Approved',
    actionDate: '24.09.2025',
  },
  {
    id: 10,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbiif0ryBLG02_DcBonV1dlCEFxwIMV7xgcQ&s',
    song: 'Yeh Mera Husn',
    artist: 'Sameer Anjaan',
    lyrics: 'English',
     status: 'Approved',
    actionDate: '22.09.2025',
  },
];
 

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case 'action needed':
      return 'status-action-needed';
    case 'in review':
      return 'status-in-review';
    case 'approved':
      return 'status-approved';
    default:
      return '';
  }
};
 
 
const AllReleases = () => {
  return (
    <div className="releases-container">
      <div className="releases-card">
        
        <div className="releases-header">
          <div className="tabs">
            <button className="tab-btn active">All Releases</button>
            <button className="tab-btn">Live</button>
            <button className="tab-btn">Draft</button>
            <button className="tab-btn">Pending</button>
            <button className="tab-btn">Sent for verification</button>
            <button className="tab-btn">On Hold</button>
            <button className="tab-btn">Rejected</button>
            <button className="tab-btn">Approved</button>
            {/* <button className="tab-btn">Takedown</button> */}
          </div>
          <div className="search-wrapper">
            <input type="text" placeholder="Search by (Artist) artist" className="search-input" />
          </div>
        </div>
 
        
        <div className="table-wrapper">
          <table className="releases-table">
            <thead>
              <tr>
                <th>THUMBNAIL</th>
                <th>SONG</th>
                <th>LYRICS</th>
                <th>STATUS</th>
                <th>ACTION DATE</th>
                {/* <th>ACTIONS</th> */}
              </tr>
            </thead>
            <tbody>
              {releasesData.map((release) => (
                <tr key={release.id}>
                  <td>
                    <img src={release.thumbnail} alt="thumbnail" className="thumbnail-img" />
                  </td>
                  <td>
                    <div className="song-info">
                      <span className="song-title">{release.song}</span>
                      <span className="song-artist">{release.artist}</span>
                    </div>
                  </td>
                  <td>{release.lyrics}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(release.status)}`}>
                      {release.status}
                    </span>
                  </td>
                  <td>{release.actionDate}</td>
                  <td>
                    <button className="action-btn">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </div>
        <br /><br />
         <div className="pagination-controls">
            <button className="pagination-btn" disabled>Previous</button>
            <button className="pagination-btn active">1 </button>
            <br /> <br />
            <button className="pagination-btn active">2 </button>
           <br /><br />
            <button className="pagination-btn active">3 </button>
            <br /> <br />
            <button className="pagination-btn active">4 </button>
           <br /> <br />
            <button className="pagination-btn active">5 </button>
            <br />
            
            
           
            
           
             <button className="pagination-btn active">...... </button>
             <br />
            
            <br />
            <button className="pagination-btn">Next</button>
          </div>
      </div>
   
    </div>
  );
};
 
export default AllReleases;
 