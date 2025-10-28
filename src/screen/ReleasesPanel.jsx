import React from "react";
import "./ReleasesPanel.css";

const latestReleases = [
  { id: 1, title: "Jay Hind", artist: "Shah Rukh Khan", imageUrl: "https://m.economictimes.com/thumb/msid-122781322,width-1200,height-900,resizemode-4,imgsize-52140/injury-forces-shah-rukh-khan-to-take-break-from-king-shoot.jpg", status: "Live" },
  { id: 2, title: "Tejas Mahakal", artist: "Tejas Mahakal", imageUrl: "https://fashionista.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyOTI3MjUxMTMyNzg2NTI5/gigi-hadid-img-models-cropped.jpg", status: "Live" },
  { id: 3, title: "Don't Touch", artist: "Badshah", imageUrl: "https://i.mdel.net/i/db/2023/9/2048228/2048228-270t.jpg", status: "Live" },
  { id: 4, title: "Babu langda", artist: "Aniket Munot", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuOQjBndN-0sFDddu0sjv95nRLk41wAgvg&s", status: "Live" },
  { id: 5, title: "Gunda babu", artist: "yash bhatjode", imageUrl: "https://cdn.pixabay.com/photo/2017/12/22/14/42/girl-3033718_1280.jpg", status: "Live" },
  { id: 6, title: "Babu Langda", artist: "Honey Singh", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6B-PVXMG_mKAhEb9nLkXFjXWcYLaEP8tTQ&s", status: "Live" },
];

const topRevenueSongs = [
  { id: 1, title: "Babu langda", artist: "Tejas Mahakal", releaseDate: "18 Mar 2025", imageUrl: "https://i.dailymail.co.uk/i/pix/2015/01/07/2477609600000578-2899561-Multi_talented_IMG_praised_model_Gizele_Oliveira_for_her_ability-m-11_1420639554729.jpg", revenue: "13.5k" },
  { id: 2, title: "Mere ujjain ke Mahakal", artist: "Tejas Mahakal", releaseDate: "22 Feb 2025", imageUrl: "https://m.media-amazon.com/images/M/MV5BMTY3Nzg2NjA1OF5BMl5BanBnXkFtZTgwMjY5NTU1MzI@._V1_FMjpg_UX1000_.jpg", revenue: "11.2k" },
  { id: 3, title: "Zingi Pawari", artist: "Tejas Mahakal", releaseDate: "05 Jan 2025", imageUrl: "https://media.themoviedb.org/t/p/w500/lh5zibQXYH1MNqkuX8TmxyNYHhK.jpg", revenue: "9.8k" },
  { id: 4, title: "Sali pyar krna", artist: "Tejas Mahakal", releaseDate: "15 Apr 2025", imageUrl: "https://www.televisionacademy.com/files/assets_r/containers/assets/bios/alexandra-daddario-2022-noms-450x600.jpg/77aebdc23cf49a409baca6c516a0c16f/alexandra-daddario-2022-noms-450x600.jpg", revenue: "8.1k" },
  { id: 5, title: "Hum saath saath hai ", artist: "Tejas Mahakal", releaseDate: "30 May 2025", imageUrl: "https://www.hollywoodreporter.com/wp-content/uploads/2020/04/gettyimages-957214798-h_2020.jpg?w=1296&h=730&crop=1", revenue: "7.5k" },
  { id: 6, title: "Nobita", artist: "Yash Bhatjode", releaseDate: "18 Mar 2025", imageUrl: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2022/03/alexandra-daddario.jpg?fit=990%2C557&quality=89&ssl=1", revenue: "13.5k" },
  { id: 7, title: "Doremon", artist: "Aniket Munot", releaseDate: "22 Feb 2025", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2PbUIcsspsV06qQqZwcZ-JhoMo_lqLM-Tg&s", revenue: "11.2k" },
  { id: 8, title: "Hum aap ke hai kon", artist: "Supriya Gunjal", releaseDate: "05 Jan 2025", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOXmgkGrI8LXw0uwkOp3REKyQdKJJf6rJsg&s", revenue: "9.8k" },
  { id: 9, title: "Kar do bela par ", artist: "Prachi Date", releaseDate: "15 Apr 2025", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-jZOfpjn2wraApm5XH06R4UYgt8eJnUZcw&s", revenue: "8.1k" },
  { id: 10, title: "Chal mere bhai ", artist: "Supriya Gunjal", releaseDate: "30 May 2025", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOXmgkGrI8LXw0uwkOp3REKyQdKJJf6rJsg&s", revenue: "7.5k" },
];

const ReleasesPanel = () => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "live":
        return "releases-panel-status-live";
      case "processing":
        return "releases-panel-status-processing";
      case "error":
        return "releases-panel-status-error";
      default:
        return "";
    }
  };

  return (
    <div className="releases-panel-page-container">
      <main className="releases-panel-main-content">
        <div className="releases-panel-grid">
          <div className="releases-panel-card">
            <h2 className="releases-panel-card-title">Latest Releases</h2>
            <ul className="releases-panel-list">
              {latestReleases.map((release) => (
                <li key={release.id}>
                  <div className="releases-panel-list-item">
                    <img
                      className="releases-panel-item-image"
                      src={release.imageUrl}
                      alt={release.title}
                    />
                    <div className="releases-panel-item-info">
                      <span className="releases-panel-item-title">{release.title}</span>
                    </div>
                    <span className={`releases-panel-status ${getStatusClass(release.status)}`}>
                      {release.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="releases-panel-card">
            <h2 className="releases-panel-card-title">Top 10 Revenue Generating Songs</h2>
            <ul className="releases-panel-list">
              {topRevenueSongs.map((song) => (
                <li key={song.id}>
                  <div className="releases-panel-list-item">
                    <img
                      className="releases-panel-item-image"
                      src={song.imageUrl}
                      alt={song.title}
                    />
                    <div className="releases-panel-item-info">
                      <span className="releases-panel-item-title">{song.title}</span>
                      <span className="releases-panel-item-subtitle">
                        {song.artist} • {song.releaseDate}
                      </span>
                    </div>
                    <span className="releases-panel-revenue">₹{song.revenue}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReleasesPanel;