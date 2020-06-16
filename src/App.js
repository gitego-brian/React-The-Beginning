import React, { Component } from 'react';
import NavBar from './components/navBar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const { counters, index } = this.findCounter(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    if (counter.value > 0) {
      const { counters, index } = this.findCounter(counter);
      counters[index].value--;
      this.setState({ counters });
    }
  };
  handleDelete = (id) => {
    this.setState({
      counters: this.state.counters.filter((el) => el.id !== id),
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters,
    });
  };
  findCounter(counter) {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    return { counters, index };
  }
  render() {
    return (
      <React.Fragment>
        <NavBar
          counterNumber={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
