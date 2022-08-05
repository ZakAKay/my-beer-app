import React, { Component, useState, useEffect } from "react";

export default function App() {
  const [arrayOfBeer, setArrayOfBeer] = useState([]);

  useEffect(() => {
    const fetchBeers = () => {
      fetch("https://api.punkapi.com/v2/beers")
        .then((response) => {
          return response.json();
        })
        .then((arrayOfBeer) => setArrayOfBeer(arrayOfBeer));
    };
    fetchBeers();
  }, []); //the empty bracket is called a dependency array (watch list)

  // componentDidMount() {
  //   fetch("https://api.punkapi.com/v2/beers")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((arrayOfBeer) => setArrayOfBeer(arrayOfBeer));
  // }

  const handleLike = () => {
    alert("You Liked This Beer!");
  };

  return (
    <div>
      {/* <h2>Your component works</h2>; */}
      <ol>
        {arrayOfBeer.map((beer, index) => {
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
              <button onClick={handleLike}>Like This Beer?</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
