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
        this.onDelete = this.onDelete.bind(this)
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

        let todos = this.state.todos
        todos = todos.map((item, index) => {
            return (
                <TodoItem item={item} key={index} onDelete={this.onDelete} />
            )
        })

        return (
            <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <p>{this.state.age}</p>
                <ul>{todos}</ul>
                <ListComponent todos={this.state.todos} />
            </div>
        )
    }

    onDelete(item) {
        let updatedTodos = this.state.todos.filter(function(val, index) {
            return item !== val
        })
        this.setState({
            todos: updatedTodos
        })
    }
}

// create TodoItem component

class TodoItem extends React.Component {

    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    render() {
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name" onClick={this.test}>{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> x</span>
                </div>
            </li>
        )        
    }

    handleDelete() {
        this.props.onDelete(this.props.item)
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


// Read events system documentation