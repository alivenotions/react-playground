import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      date: new Date(),
      counter: 0,
    }
    this.increment = this.increment.bind(this)
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  increment() {
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.incrementBy
    }))
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increment}>
          Increment by {this.props.incrementBy}
        </button>
      </div>
    )
  }
}

export default Clock
