import React from "react";
import "./CreateTicket.css";

export default function CreateTicket() {
  return (
    <div className="ticket-content">
      <div className="ticket-card">
        <h2 className="ticket-title">📺 Remove YouTube Claims</h2>
        <p className="ticket-note">
          <strong>Note:</strong> For security reasons, bank change requests may
          take up to 24–48 hours to process.
        </p>

        <form className="ticket-form">
         
          <label>Name of the song*</label>
          <select>
            <option>Name of the songs</option>
            <option>Song 1</option>
            <option>Song 2</option>
          </select>

       
          <label>Paste links from which you want to remove claim*</label>
          <textarea placeholder="You can paste multiple links here"></textarea>

          
          <label>Channel Links*</label>
          <input type="text" placeholder="Enter channel link" />

         
          <div className="info-box">
            <p>
              Hey there! 😀 To get your claim removed faster (within 24 working
              hours), just add the links between <b>9 AM – 5 PM (Mon-Fri)</b>.
            </p>
            <p>
              🔒 Keep your video <b>Unlisted</b> or <b>Public</b> — we can’t
              remove claims from Private videos.
            </p>
            <p>Hope this helps! 🎉</p>
          </div>

          
          <button type="submit" className="submit-btn">
            Release Claim
          </button>
        </form>
      </div>
    </div>
  );
}
