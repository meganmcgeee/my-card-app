import React, { Component } from 'react';
// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>____'s Card</h1>
        </header>

        <ul>
          <form className="new-card">
            <textarea
              type="text"
              ref="textInput"
              placeholder="Add the info you would like displayed on your card"
            />
          </form>
        </ul>
      </div>
    );
  }
}
