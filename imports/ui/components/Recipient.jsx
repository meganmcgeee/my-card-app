import React from 'react';
// App component - represents the whole app
const Recipient = () => (
  <div className="container">
    <h1>My Card</h1>
    <h4>Enter the phone number of who you are sending your card to!</h4>
    <ul>
      <form className="recipient">
        <input
          type="text"
          ref="textInput"
          placeholder="+1(xxx)xxx-xxxx"
        />
      </form>
    </ul>
    <button />
  </div>
);


export default Recipient;
