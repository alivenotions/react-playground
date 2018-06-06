import React from 'react'

import Clock from './components/Clock'
import List from './components/List'
import Form from './components/Form'

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Clock incrementBy={2}/> */}
        {/* <List /> */}
        <Form />
      </div>
    )
  }
}

export default App
