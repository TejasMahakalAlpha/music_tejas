import React from 'react';
import './EarningPaidToYou.css';

const EarningPaidToYou = () => {
  const earningsData = [
    { sno: 1, paymentDate: '19/Aug/2025', userId: 'USER_ID_1', royalty: '1,324', lessTds: '132', netPayable: '1,192' },
    { sno: 2, paymentDate: '15/Jul/2025', userId: 'USER_ID_2', royalty: '1,425', lessTds: '138', netPayable: '1,286' },
    { sno: 3, paymentDate: '12/Jun/2025', userId: 'USER_ID_3', royalty: '1,994', lessTds: '199', netPayable: '1,795' },
    { sno: 4, paymentDate: '10/May/2025', userId: 'USER_ID_4', royalty: '975', lessTds: '94', netPayable: '882' },
    { sno: 5, paymentDate: '10/Apr/2025', userId: 'USER_ID_5', royalty: '1,697', lessTds: '167', netPayable: '1,530' },
  ];

  return (
    <div className="earnings-container">
      <div className="table-header">
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
        <table className="earnings-table">
          <thead>
            <tr>
              <th>S.NO.</th>
              <th>PAYMENT DATE</th>
              <th>USERID</th>
              <th>ROYALTY</th>
              <th>LESS TDS</th>
              <th>NET PAYABLE</th>
            </tr>
          </thead>
          <tbody>
            {earningsData.map((row) => (
              <tr key={row.sno}>
                <td>{row.sno}</td>
                <td>{row.paymentDate}</td>
                <td>{row.userId}</td>
                <td>{row.royalty}</td>
                <td>{row.lessTds}</td>
                <td>{row.netPayable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EarningPaidToYou;