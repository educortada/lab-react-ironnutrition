import React from 'react'

class Form extends React.Component {

  state = {
    name: 'Name',
    calories: 0,
    image: 'https://loremflickr.com/640/360',
  }

  handleInput = (event) => {
    this.setState(
      { [event.target.name]: event.target.value }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state)
  }

  render() {
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
  }
}

export default Form