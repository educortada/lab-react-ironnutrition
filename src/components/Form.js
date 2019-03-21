import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: '',
    calories: 0,
    image: 'https://loremflickr.com/640/360',
    quantity: 0,
    isFormVisible: false,
  }

  handleInput = (event) => {
    this.setState(
      { [event.target.name]: event.target.value }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state)
    this.handleForm()
  }

  // Toggle
  handleForm = () => {
    this.setState(
      { isFormVisible: !this.state.isFormVisible }
    )
  }

  render() {
    let isFormVisible = this.state.isFormVisible

    if (isFormVisible) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input onChange={this.handleInput} className="input" type="text" placeholder="Name" name="name" value={this.state.name} />
            </div>
          </div>

          <div className="field">
            <label className="label">Number of calories</label>
            <div className="control">
              <input onChange={this.handleInput} className="input" type="number" placeholder="Number of calories" name="calories" value={this.state.calories} />
            </div>
          </div>

          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input onChange={this.handleInput} className="input" type="text" placeholder="Image" name="image" value={this.state.image} />
            </div>
          </div>
          <button className="button is-primary" type="submit">Add food</button>
        </form>
      )
    } else {
      return (
        <div>
          <button className="button is-primary" onClick={this.handleForm}>Show Form</button>
        </div>
      )
    }
  }
}

export default Form