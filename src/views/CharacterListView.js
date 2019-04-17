import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from "../actions";

class CharacterListView extends React.Component {
    constructor(props){
      super(props);
    }

  componentDidMount() {
   this.props.getCharacters();
  }

  render() {
    if (this.props.isfetching) {
      return <h2>fetching data...</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
       {this.props.characters && (<CharacterList characters={this.props.characters} />)}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

function mapStateToProps(state){
  return {
    characters: state.charsReducer.characters,
    isfetching: state.charsReducer.isfetching,
    error: state.charsReducer.error
  }
}; 

export default connect(
 mapStateToProps,
  {
    getCharacters 
    /* action creators go here */
  }
)(CharacterListView);
