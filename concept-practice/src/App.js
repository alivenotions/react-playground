import React from 'react'

import Clock from './components/Clock'

class App extends React.Component {
  render() {
    return <Clock incrementBy={2}/>
  }
}

export default App
