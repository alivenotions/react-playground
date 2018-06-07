import React from 'react'

const NatNumList = ({natNum}) => <li>{natNum}</li>

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      natNums: [
        {id: 1, num: 1},
        {id: 2, num: 2},
        {id: 3, num: 3},
        {id: 4, num: 4},
      ]
    }
    this.square = this.square.bind(this)
  }

  square() {
    this.setState({
      natNums: this.state.natNums.map(
        nums => Object.assign({}, nums, {num: nums.num ** 2})
      )
    })
  }

  render() {
    const natNumList = this.state.natNums.map(
      // TODO: Understand keys better
      ({num, id}) => <NatNumList key={id} natNum={num} />
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
