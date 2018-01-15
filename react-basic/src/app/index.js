const React = require('react')
const ReactDOM = require('react-dom')

const myCheese = {
    name: 'Camembert',
    smellFactor: 'Extreme Punk',
    price: '3.50',
}

// create component
const Welcome = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}, {props.message}</h1>
            <p>Cheese Name: {props.cheese.name}</p>
            <p>Smell Factor: {props.cheese.smellFactor}</p>
            <p>Price: {props.cheese.price}</p>
        </div>
)}
const element = <Welcome name="Sara" message="I like Cheese" cheese={myCheese}/>

// put component into html page
ReactDOM.render(element, document.getElementById('todo-wrapper'))
