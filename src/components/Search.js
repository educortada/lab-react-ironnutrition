import React, { Component } from 'react';

class Search extends Component {

  state = {
    searchWord: '',
  }

  handleInput = async (event) => {
    await this.setState(
      { searchWord: event.target.value }
    )
    const foodListInit = this.props.foodListInit
    const filtereddFoodList = foodListInit.filter(item => {
      return (
        item.name.toLowerCase().search(
          this.state.searchWord.toLowerCase()) !== -1
      )
    })
    this.props.searchFood(filtereddFoodList)
  }

  render() {
    return (
      <input
        onChange={this.handleInput}
        className="input"
        type="text"
        placeholder="Search"
        name="searchWord"
        value={this.state.searchWord}
      />
    )
  }
}

export default Search