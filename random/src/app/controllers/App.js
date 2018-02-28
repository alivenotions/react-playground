import React from 'react'

class HelloWorld extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            age: 23
        }
        this.incrementAge = this.incrementAge.bind(this.incrementAge)
    }

    incrementAge() {

    }

    render() {
        return (
            <div>
                <h1 onClick={this.incrementAge}>Hello World</h1>
                <p>{this.state.age}</p>
                <h2>H2 tag</h2>
                <Name name="basit" />
            </div>
        )
    }
}

const Name = (props) => <p> { props.name } </p>

export default HelloWorld
