import React, { Component } from 'react';

// CSS
import './App.css';
import 'bulma/css/bulma.css';

// Data
import foods from './data/foods.json'

// Components
import FoodBox from './components/FoodBox'

class App extends Component {

  state = {
    foodsList: [...foods]
  }

  renderList = () => {
    return (
      this.state.foodsList.map((food, index) => {
        return <FoodBox key={`id-${index}`} food={food} />
      })
    )
  }

  render() {
    return (
      <div>
        <header>
        </header>
        <main>
          {this.renderList()}
        </main>
      </div>
    );
  }
}

export default App;
