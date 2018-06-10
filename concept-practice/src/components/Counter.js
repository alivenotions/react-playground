import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(this.props)
    if(nextProps.counter === this.props.counter) return true
    return false
  }

  render() {
    return (
      <div>
        <p>Counter: {this.props.counter}</p>
        <button onClick={this.props.increment}>
          Increment by {this.props.incrementBy}
        </button>
      </div>
    )
  }
}

export default Counter
