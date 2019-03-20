import React, { Component } from 'react';

class TodayFoodList extends Component {

  state = {
    todayFoodList: [{name: 'Sweet Potato' }]
  }

  renderList = () => {
    return (
      this.state.todayFoodList.map((food, index) => {
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