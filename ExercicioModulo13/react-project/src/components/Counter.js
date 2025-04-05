import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    //Formula da classe no sistema
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `${this.state.count} cliques`;
  }

  componentDidUpdate() {
    document.title = `${this.state.count} cliques`;
  }

  render() {
    return (
      <React.Fragment>
        <p>Houveram {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Aumentar cliques
        </button>
      </React.Fragment>
    );
  }
}
