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
import TodayFoodList from './components/TodayFoodList'

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
          <section class="columns">
            <article className="column is-three-quarters">
              {this.renderList()}
            </article>
            <article className="column">
              <h2 class="title is-4">Today's foods</h2>
              <TodayFoodList />
            </article>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
