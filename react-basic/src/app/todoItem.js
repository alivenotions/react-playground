const React = require('react')
require('./css/todoItem.css')

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

module.exports = TodoItem