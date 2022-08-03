import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfBeer: [],
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((arrayOfBeer) => this.setState({ arrayOfBeer }));
  }

  // <button onclick= 'myFunction()'></button>
  // onclick alert
  handleLike = () => {
    alert("You Liked This Beer!");
  };

  render() {
    return (
      <div>
        {/* <h2>Your component works</h2>; */}
        <ol>
          {this.state.arrayOfBeer.map((beer, index) => {
            return (
              <li key={beer.id}>
                <h2>{beer.name}</h2>
                <p>abv:</p>
                {beer.abv}
                <br></br>
                <p>Attenuation Level:</p>
                {beer.attenuation_level}
                <p>Boil Volume:</p>
                {beer.boil_volume.value}
                {beer.boil_volume.unit}
                <p>Description:</p>
                {beer.description}
                <p>Food Pairing:</p>
                {beer.food_pairing}
                <p>Ingredients</p>
                {beer.ingredients.malt.map((malt) => (
                  <p>{malt.name}</p>
                ))}
                <br></br> <br></br>
                <button onClick={this.handleLike}>Like This Beer?</button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
