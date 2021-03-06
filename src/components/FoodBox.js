import React, { Component } from 'react';

class FoodBox extends Component {

  state = {
    amount: 0,
  }

  handleInput = (event) => {
    this.setState(
      { [event.target.name]: event.target.value }
    )
  }

  handleClick = (food) => {
    food.quantity = 1
    this.props.todayFood(food)
    const totalCaloriesMultipliedByQuantity = food.calories * food.quantity
    this.props.totalCalories(totalCaloriesMultipliedByQuantity)
  }

  render() {
    const { food } = this.props
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.amount}
                  onChange={this.handleInput}
                  name="amount"
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={ () => { this.handleClick(food) } }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default FoodBox