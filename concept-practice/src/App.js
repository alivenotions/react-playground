import React from 'react'

import Clock from './components/Clock'
import List from './components/List'
import Form from './components/Form'
import Calculator from './components/Calculator'

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Clock incrementBy={2}/> */}
        {/* <List /> */}
        {/* <Form /> */}
        <Calculator />
      </div>
    )
  }
}

export default App
