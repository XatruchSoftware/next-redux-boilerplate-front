import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import { startAddTodo, startRemoveTodo, setTodos } from '../redux/actions/todos'
import { getTodos } from '../lib/todos'

class Index extends React.Component {
    static async getInitialProps({ reduxStore, req }) {
        const todos = await getTodos() 
        reduxStore.dispatch(setTodos(todos))
        return { todos }
    }
    render () {
        return (
            <div>
                Hello
                <p>{JSON.stringify(this.props.todos)}</p>
                <button onClick={() => this.props.startAddTodo({ title: 'hello', body: 'there' })}>Add a todo</button>
                <button onClick={() => this.props.startAddTodo({ title: 'hi', body: 'all' })}>Add another todo</button>
                <button onClick={() => this.props.startRemoveTodo({ title: 'hello', body: 'there' })}>remove todo</button>
                <Link href="/test">
                    <a>test</a>
                </Link>
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    todos: state
})

const mapDispatchToProps = (dispatch) => ({
    startAddTodo: (todo) => dispatch(startAddTodo(todo)),
    startRemoveTodo: (todo) => dispatch(startRemoveTodo(todo))
})

export default connect(mapStatetoProps, mapDispatchToProps)(Index)