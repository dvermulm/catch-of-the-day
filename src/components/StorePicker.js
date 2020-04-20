import React from 'react';
import { getFunName } from '../helpers';

// reach fragment tag allows more than one sibling element
// blank tags <></> might now work in react
// use () after return in render method to allow for correct indentation
// use curly brackets to comment in react {/* comment here */}
// but double forward slash also seems to work?

class StorePicker extends React.Component {
  // creating an empty ref
  myInput = React.createRef();

  /* goToStore(event) {
    // PreventDefault stops the form from submitting
    event.preventDefault();
    // This gets the text from the input
    // To do this you need to use constructor method or change this to function (see gotoStore below)
    // Source for the above comment. Beg React Module 11. Mintue 12.
    // This changes the page to /store/whatever-they-enter
  } */

  goToStore = event => {
    event.preventDefault();
    console.log(this.myInput.current.value);
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store.</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
