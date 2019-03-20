import React, { Component } from 'react';

// CSS
import 'bulma/css/bulma.css';
import './App.css';

// Data
import foods from './data/foods.json'

// Components
import FoodBox from './components/FoodBox'
import Form from './components/Form'
import Search from './components/Search'

class App extends Component {
  // foodListInit: Array con toda la comida del JSON + la comida que se añade.
  // foodList: Array que se actualiza con el filtro.
  state = {
    foodListInit: [...foods],
    foodList: [...foods]
  }

  renderList = () => {
    return (
      this.state.foodList.map((food, index) => {
        return <FoodBox key={`id-${index}`} food={food} />
      })
    )
  }

  handleAddFood = (newFood) => {
    this.setState(
      {
        foodListInit: [...this.state.foodListInit, newFood],
        foodList: [...this.state.foodListInit, newFood]
      }
    )
  }

  handleSearchFood = (filtereddFoodList) => {
    this.setState(
      { foodList: [...filtereddFoodList] }
    )
  }

  render() {
    return (
      <div>
        <header>
          <section>
            <h1 className="title is-3">IronNutrition</h1>
            <Search
              searchFood={this.handleSearchFood}
              foodListInit={this.state.foodListInit}
            />
          </section>
        </header>
        <main>
          <section>
            <Form addFood={this.handleAddFood} />
          </section>
          <section>
            {this.renderList()}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
