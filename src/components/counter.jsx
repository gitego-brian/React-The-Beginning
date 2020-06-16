import React, { Component } from 'react';

class Counter extends Component {
  render = () => {
    const { counter, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <span className={this.setBadgeClass()}>{this.formatvalue()}</span>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm"
          disabled={counter.value === 0 ? 'disabled' : ''}
        >
          Decrement
        </button>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>

        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-outline-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  };

  setBadgeClass = () => {
    return `badge badge-${
      this.props.counter.value === 0 ? 'warning' : 'primary'
    } m-2`;
  };

  formatvalue = () => {
    const { value } = this.props.counter;
    return value === 0 ? 'ZERO' : value;
  };
}

export default Counter;
