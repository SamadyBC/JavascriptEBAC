import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Form from "./components/Form";
import { getNotes, addNote, removeNote } from "./store/actions";

class App extends Component {
  render() {
    return (
      <div>
        <Header name={this.props.name}></Header>
        <Form addNote={this.props.addNote}></Form>
        <Grid node={this.props.notes} removeNote={this.props.removeNote}></Grid>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNotes: () => {
      dispatch(getNotes());
    },
    addNote: (note) => {
      dispatch(addNote(note));
    },
    removeNote: (id) => {
      dispatch(removeNote(id));
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    name: state.name,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
