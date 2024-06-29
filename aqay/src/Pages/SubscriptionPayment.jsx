import React, { useState } from "react";
import "../CSS/SubscriptionPayment.css";

const SubscriptionPayment = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  return (
    <div className="subscription-container">
      <h2 className="subscription-title">Subscription Fees</h2>
      <div className="subscription-form">
        <label className="subscription-method-title">Payment Method</label>
        <div className="subscription-methods">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === "creditCard"}
              onChange={() => setPaymentMethod("creditCard")}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
            />
            PayPal
          </label>
        </div>
        {paymentMethod === "creditCard" ? (
          <div className="payment-fields">
            <p>
              If you will pay with Credit Card you have to fill out the next
              fields
            </p>
            <input
              type="text"
              placeholder="Card Number"
              className="input-field"
            />
            <div className="card-expiry-cvc">
              <input type="text" placeholder="MM*" className="input-field" />
              <input type="text" placeholder="YY*" className="input-field" />
              <input
                type="text"
                placeholder="CVV*/CVC*"
                className="input-field"
              />
            </div>
          </div>
        ) : (
          <div className="payment-fields">
            <p>
              If you will pay with Paypal you have to fill out the next fields
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="input-field"
            />
          </div>
        )}
        <div className="subscription-buttons">
          <button className="cancel-button">Cancel</button>
          <button className="ok-button">Ok</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPayment;
