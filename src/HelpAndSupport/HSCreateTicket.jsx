import React from 'react';
import './HSCreateTicket.css';

const HSCreateTicket = () => {
  const issueOptions = [
    'Request Takedown of a Song',
    'Royalty Payment Inquiry',
    'Update Account Information',
    'General Support Question',
  ];

  const ticketsData = [
    { id: 1, issueTitle: 'request takedown of a song', invoice: 'INV_341_234', status: 'Resolved', date: '4 months ago' },
    { id: 2, issueTitle: 'request takedown of a song', invoice: 'INV_341_233', status: 'Resolved', date: '4 months ago' },
    { id: 3, issueTitle: 'request takedown of a song', invoice: 'INV_341_232', status: 'Resolved', date: '4 months ago' },
    { id: 4, issueTitle: 'request takedown of a song', invoice: 'INV_341_231', status: 'Resolved', date: '4 months ago' },
    { id: 5, issueTitle: 'request takedown of a song', invoice: 'INV_341_230', status: 'Resolved', date: '4 months ago' },
    { id: 6, issueTitle: 'request takedown of a song', invoice: 'INV_341_229', status: 'Resolved', date: '4 months ago' },
    { id: 7, issueTitle: 'request takedown of a song', invoice: 'INV_341_228', status: 'Resolved', date: '4 months ago' },
  ];

  return (
    <div className="ticket-page-container">
      <form className="ticket-form">
        <select defaultValue="" required>
          <option value="" disabled>Select Issue</option>
          {issueOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>

      <div className="ticket-list-container">
        <div className="ticket-list-header">
          <div className="header-issue">Issue</div>
          <div className="header-status">Ticket Status</div>
          <div className="header-date">Date</div>
          <div className="header-action">Action</div>
        </div>
        <div className="ticket-list-body">
          {ticketsData.map((ticket) => (
            <div key={ticket.id} className="ticket-item">
              <div className="ticket-issue">
                <span>{ticket.issueTitle}</span>
                <small>{ticket.invoice}</small>
              </div>
              <div className="ticket-status">
                <span className="status-pill status-resolved">{ticket.status}</span>
                <span className="status-pill status-new-message">New Message</span>
              </div>
              <div className="ticket-date">{ticket.date}</div>
              <div className="ticket-action">
                <a href="#">Reply</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HSCreateTicket;