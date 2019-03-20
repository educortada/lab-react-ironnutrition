import React, { Component } from 'react';

// CSS
import 'bulma/css/bulma.css';
import './App.css';

// Data
import foods from './data/foods.json'

// Components
import FoodBox from './components/FoodBox'
import Form from './components/Form'

class App extends Component {

  state = {
    foodsList: [...foods]
  }

  renderList = () => {
    return (
      this.state.foodsList.map((food, index) => {
        console.log(food)
        return <FoodBox key={`id-${index}`} food={food} />
      })
    )
  }

  handleAddFood = (newFood) => {
    console.log(newFood)
    this.setState(
      { foodsList: [...this.state.foodsList, newFood] }
    )
  }

  render() {
    return (
      <main>
        <section>
          <Form addFood={this.handleAddFood} />
        </section>
        <section>
          {this.renderList()}
        </section>
      </main>
    );
  }
}

export default App;
