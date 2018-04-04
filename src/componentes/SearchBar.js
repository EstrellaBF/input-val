import React , { Component } from 'react';

class SearchBar extends Component {
  
  constructor(props){
    super(props);
    this.state = {term : ' :3'}
  }

  handleOnchange = (e) => {
    console.log(e.target.value)
    this.setState({ term : e.target.value})
  }

  render(){
    return (
      <div>
        <input onChange = {this.handleOnchange}/>
        El valor del input es : {this.state.term}  
      </div>
    )
  }
}

export default SearchBar