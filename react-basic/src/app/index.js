const React = require('react')
const ReactDOM = require('react-dom')

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
        this.state = {
            todos: ['Wake up', 'Shake up', 'Pick up keys'],
            age: 22
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                age: 23
            })
        }, 1000)
    }

    render() {

        return (
            <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <p>{this.state.age}</p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
                <ListComponent todos={this.state.todos} />
            </div>
        )
    }
}

class ListComponent extends React.Component {
    render() {
        return (
            <p>{this.props.todos[0]}</p>
        )
    }
}

// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'))
