import React from 'react';
import axios from 'axios';

class New extends React.Component {
  constructor() {
    super();
    this.state = {
      newPetName: '',
      newPetBreed: '',
    };
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = () => {
    // AXIOS POST HOW DO I DO IT???$EWHITOEHWIOTH$EIOWHT#$IO@HT$IOWPH
    axios
      .post('http://localhost:3001/api/pets', {
        name: this.state.newPetName,
        breed: this.state.newPetBreed,
      })
      .then((result) => {
        console.log(result);
      });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <label htmlFor="newPetName">New Pet Name:</label>
        <input
          onChange={this.handleInput}
          type="text"
          name="newPetName"
          value={this.state.newPetName}
        />
        <label htmlFor="newPetBreed">New Pet Breed:</label>
        <input
          onChange={this.handleInput}
          type="text"
          name="newPetBreed"
          value={this.state.newPetBreed}
        />
        <button onClick={this.handleClick}>Save</button>
      </>
    );
  }
}

export default New;
