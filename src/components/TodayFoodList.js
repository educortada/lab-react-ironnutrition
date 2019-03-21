import React, { Component } from 'react';

class TodayFoodList extends Component {

  renderList = () => {
    return (
      this.props.todayFoods.map((food, index) => {
        return <li key={`id-${index}`}>{food.quantity} {food.name} = {food.quantity * food.calories} cal</li>
      })
    )
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
        <p>Total: {this.props.totalCalories}</p>
        {console.log(this.props.todayFoods)}
      </div>
    )
  }
}

export default TodayFoodList