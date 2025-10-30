import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import './MyBanks.css';

const MyBanks = () => {
  const bankDetails = {
    bankName: 'Kotak Mahindra Bank',
    branchName: 'Pune Branch',
    accountHolderName: 'Mukesh Ambani',
    accountNumber: '**** **** **** 1234',
    accountType: 'Savings',
    ifscCode: 'KKBK0001234',
    placeOfBusiness: 'Pune, Maharashtra',
    panNo: 'ABCDE1234F',
    gstNumber: 'NA',
  };

  return (
    <div className="my-banks-container">
      <div className="banks-header">
        <div className="header-left">
          <button className="back-btn">
            <BsArrowLeftShort size={24} />
            Back
          </button>
          <h2>Linked Payment Account</h2>
        </div>
        <span className="verified-pill">Verified</span>
      </div>

      <p className="info-paragraph">
        Your current payment method is <strong>Direct Bank Transfer</strong> in your <strong>Kotak Mahindra Bank</strong> Bank Account. The status of your account is <span className="status-active">Active</span>.
        Your Music Royalty account is currently linked to the following bank details:
      </p>

      <div className="details-grid-container">
        <div className="detail-item">
          <label>Bank Name</label>
          <span>{bankDetails.bankName}</span>
        </div>
        <div className="detail-item">
          <label>Branch Name</label>
          <span>{bankDetails.branchName}</span>
        </div>
        <div className="detail-item">
          <label>Account Holder Name</label>
          <span>{bankDetails.accountHolderName}</span>
        </div>
        <div className="detail-item">
          <label>Account Number</label>
          <span>{bankDetails.accountNumber}</span>
        </div>
        <div className="detail-item">
          <label>Account Type</label>
          <span>{bankDetails.accountType}</span>
        </div>
        <div className="detail-item">
          <label>IFSC Code</label>
          <span>{bankDetails.ifscCode}</span>
        </div>
        <div className="detail-item">
          <label>Place of Business</label>
          <span>{bankDetails.placeOfBusiness}</span>
        </div>
        <div className="detail-item">
          <label>PAN No</label>
          <span>{bankDetails.panNo}</span>
        </div>
        <div className="detail-item">
          <label>GST Number</label>
          <span>{bankDetails.gstNumber}</span>
        </div>
      </div>

      <button className="update-btn">Update Bank Details</button>
    </div>
  );
};

export default MyBanks;