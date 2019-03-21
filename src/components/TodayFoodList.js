import React, { Component } from 'react';

class TodayFoodList extends Component {

  renderList = () => {
    return (
      this.props.todayFoods.map((food, index) => {
        return <li key={`id-${index}`}>{food.name}</li>
      })
    )
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

export default TodayFoodList