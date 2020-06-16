import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  render = () => {
    return (
      <div>
        <span className={this.setBadgeClass()}>{this.formatvalue()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  };

  setBadgeClass = () => {
    return `badge badge-${this.state.value === 0 ? 'warning' : 'primary'} m-2`;
  };

  formatvalue = () => {
    const { value } = this.state;
    return value === 0 ? 'ZERO' : value;
  };
}

export default Counter;
