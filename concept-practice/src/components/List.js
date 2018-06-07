import React from 'react'

const NatNumList = (props) => <li>{props.children}</li>

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
    this.deleteItem = this.deleteItem.bind(this)
  }

  square() {
    this.setState({
      natNums: this.state.natNums.map(
        nums => Object.assign({}, nums, {num: nums.num ** 2})
      )
    })
  }

  deleteItem(id, e) {
    this.setState({
      natNums: this.state.natNums.filter(
        nums => nums.id !== id
      )
    })
  }

  render() {
    const natNumList = this.state.natNums.map(
      // keys are identifiers in a particular list
      // and don't help in reconciliation as such
      ({num, id}) =>
        <NatNumList key={id}>
          num: {num}
          <button onClick={e => this.deleteItem(id, e)}>delete</button>
        </NatNumList>
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
