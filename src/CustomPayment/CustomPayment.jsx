import React, { useState } from "react";
import "./CustomPayment.css";

function CustomPayment() {
  const [amount, setAmount] = useState("");
  const [particular, setParticular] = useState("");

  const gst = amount ? (amount * 0.18).toFixed(2) : "0.00"; 
  const total = amount ? (parseFloat(amount) + parseFloat(gst)).toFixed(2) : "0.00";

  const handlePay = () => {
    alert(`Payment of Rs. ${total} initiated for ${particular}`);
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <div className="payment-logo">🔴</div>
        <div className="form-group">
          <label>Amount</label>
          <div className="input-box">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
            />
            <span className="currency">₹</span>
          </div>
        </div>

        <div className="form-group">
          <label>Particular</label>
          <input
            type="text"
            value={particular}
            onChange={(e) => setParticular(e.target.value)}
            placeholder="Enter Particular"
          />
        </div>

        <div className="payment-summary">
          <p>GST @ 18% <span>Rs {gst}</span></p>
          <p>Total <span>Rs {total}</span></p>
        </div>

        <button className="pay-btn" onClick={handlePay}>Pay</button>
      </div>
    </div>
  );
}

export default CustomPayment;
