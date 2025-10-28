import React from 'react';
import './TransactionDetail.css';

const TransactionDetail = () => {
  const transactionData = [
    { id: 1, date: '19/Aug/2025', userId: 'USER_ID_1', royalty: '13,454', lessTds: '135.54', netPayable: '1,561', payoutTo: 'PROP_A', narration: 'JULY_ROYALTY' },
    { id: 2, date: '15/Jul/2025', userId: 'USER_ID_2', royalty: '14,556', lessTds: '145.56', netPayable: '12,431', payoutTo: 'PROP_B', narration: 'JUNE_ROYALTY' },
    { id: 3, date: '12/Jun/2025', userId: 'USER_ID_3', royalty: '1,894', lessTds: '18.94', netPayable: '1,705', payoutTo: 'PROP_C', narration: 'MAY_ROYALTY' },
    { id: 4, date: '10/May/2025', userId: 'USER_ID_4', royalty: '9,735', lessTds: '97.35', netPayable: '8,742', payoutTo: 'PROP_D', narration: 'APRIL_ROYALTY' },
    { id: 5, date: '10/Apr/2025', userId: 'USER_ID_5', royalty: '1,697', lessTds: '16.97', netPayable: '1,527', payoutTo: 'PROP_E', narration: 'MARCH_ROYALTY' },
  ];

  return (
    <div className="transaction-container">
      <div className="table-header">
        <div className="entries-control">
          <label htmlFor="show-entries-td">Show</label>
          <select id="show-entries-td" name="show-entries">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span>entries</span>
        </div>
        <div className="search-control">
          <label htmlFor="search-td">Search:</label>
          <input type="search" id="search-td" />
        </div>
      </div>

      <div className="table-wrapper">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>S.NO.</th>
              <th>PAYMENT DATE</th>
              <th>USERID</th>
              <th>ROYALTY</th>
              <th>LESS TDS</th>
              <th>NET PAYABLE</th>
              <th>PAYOUT TO (PROP)</th>
              <th>NARRATION</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.date}</td>
                <td>{row.userId}</td>
                <td>{row.royalty}</td>
                <td>{row.lessTds}</td>
                <td>{row.netPayable}</td>
                <td>{row.payoutTo}</td>
                <td>{row.narration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionDetail;