import React from 'react'

import Clock from './components/Clock'
import List from './components/List'

class App extends React.Component {
  render() {
    return (
      <div>
        <Clock incrementBy={2}/>
        <List />
      </div>
    )
  }
}

export default App
