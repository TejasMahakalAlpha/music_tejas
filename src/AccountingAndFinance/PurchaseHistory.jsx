import React from 'react';
import './PurchaseHistory.css';

const PurchaseHistory = () => {
  const purchaseData = [
    {
      id: 1,
      transactionId: 'TXN_123456789',
      orderId: 'NA',
      plan: 'Annual Limitless Renewal',
      songQuantity: 'Custom Purchase',
      total: '₹75',
      mode: 'netbanking',
      date: '10 Oct 2025',
      status: 'Paid',
    },
  ];

  return (
    <div className="purchase-history-container">
      <div className="table-controls">
        <div className="entries-control">
          <label htmlFor="show-entries">Show</label>
          <select id="show-entries" name="show-entries">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span>entries</span>
        </div>
        <div className="search-control">
          <label htmlFor="search">Search:</label>
          <input type="search" id="search" />
        </div>
      </div>

      <div className="table-wrapper">
        <table className="purchase-history-table">
          <thead>
            <tr>
              <th>#</th>
              <th>TRANSACTION ID</th>
              <th>ORDER ID</th>
              <th>PLAN</th>
              <th>SONG QUANTITY</th>
              <th>TOTAL</th>
              <th>MODE</th>
              <th>DATE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {purchaseData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.transactionId}</td>
                <td>{row.orderId}</td>
                <td>{row.plan}</td>
                <td>{row.songQuantity}</td>
                <td>{row.total}</td>
                <td>{row.mode}</td>
                <td>{row.date}</td>
                <td><span className="status-pill status-paid">{row.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="entries-info">
          Showing 1 to 1 of 1 entries
        </div>
        <div className="pagination-controls">
          <button disabled>Previous</button>
          <button className="active">1</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;