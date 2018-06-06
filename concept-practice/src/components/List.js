import React from 'react'

const NatNumList = ({natNum}) => <li>{natNum}</li>

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      natNums: [1, 2, 3, 4]
    }
    this.square = this.square.bind(this)
  }

  square() {
    this.setState({
      natNums: this.state.natNums.map(x => x ** 2)
    })
  }

  render() {
    const natNumList = this.state.natNums.map(
      // TODO: Understand keys better
      num => <NatNumList key="tadow" natNum={num} />
    )
    return (
      <div>
        <h3>A list of numbers</h3>
        <ul style={{listStyle:'none'}}>
          {natNumList}
        </ul>
        <button onClick={this.square}>Square the list</button>
      </div>
    )
  }
}

export default List
