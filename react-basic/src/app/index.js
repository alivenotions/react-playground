const React = require('react')
const ReactDOM = require('react-dom')
require('./css/index.css')
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// module requires
const TodoItem = require('./todoItem')
const AddItem = require('./addItem')
const About = require('./about')

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={'/'} component={TodoComponent} />
          <Route path={'/about'} component={About} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const myCheese = {
  name: 'Camembert',
  smellFactor: 'Extreme Punk',
  price: '3.50',
}

// create component via a function
// function Welcome (props){
//     return (
//         <div>

//         </div>
// )}

// ways to pass properties
// const element = <Welcome name="Sara" message="I like Cheese" cheese={myCheese}/>

// creating a component using a class
// look into HOCs for doing away with classes
class TodoComponent extends React.Component {
  constructor(props) {
    super(props)
    this.onDelete = this.onDelete.bind(this)
    this.onAdd = this.onAdd.bind(this)
    this.state = {
      todos: ['Wake up', 'Shake up', 'Pick up keys'],
      age: 22,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        age: 23,
      })
    }, 1000)
  }

  render() {
    let todos = this.state.todos
    todos = todos.map((item, index) => {
      return <TodoItem item={item} key={index} onDelete={this.onDelete} />
    })

    return (
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <p>{this.state.age}</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd} />
        <Link to="/about">About</Link>
      </div>
    )
  }

  onAdd(item) {
    let updatedTodos = this.state.todos
    updatedTodos.push(item)
    this.setState({
      todos: updatedTodos,
    })
  }

  onDelete(item) {
    let updatedTodos = this.state.todos.filter(function(val, index) {
      return item !== val
    })
    this.setState({
      todos: updatedTodos,
    })
  }
}

class ListComponent extends React.Component {
  render() {
    return <p>{this.props.todos[0]}</p>
  }
}

// put component into html page
ReactDOM.render(<App />, document.getElementById('todo-wrapper'))

// Read events system documentation
