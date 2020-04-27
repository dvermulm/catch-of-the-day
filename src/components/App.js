import React from 'react';
import Header from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // To put into state: first take a copy of exising state by using objecct spread ...
    const fishes = { ...this.state.fishes};
    // Now we can add new fish to fishes object
    fishes[`fish${Date.now()}`] = fish;
    // Now we can set the new fishes object to state - takes copied fishes plus new fish
    // Do not need to use fishes: fishes, just one as object and key are the same
    this.setState({ fishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
