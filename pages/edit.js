import Router from 'next/router'
import { connect } from 'react-redux'

import TodoForm from '../components/TodoForm'
import Layout from '../components/Layout'
import { startEditTodo, startRemoveTodo } from '../redux/actions/todos'

class EditTodo extends React.Component {
    static async getInitialProps({ query: Query, reduxStore }) {
        const state = await reduxStore.getState()
        const { query } = Query
        const todo = state.find((todo) => todo.title === query)
        return { todo, query }
    }

    onSubmit = (todo) => {
        this.props.startEditTodo(todo.title, todo)
        Router.push('/')
    }

    onRemove = (title) => {
        this.props.startRemoveTodo(title)
        Router.push('/')
    }

    render() {
        return (
            <Layout title="Edit Todo">
                <TodoForm onSubmit={this.onSubmit} todo={this.props.todo}/>
                <button onClick={() => this.onRemove(this.props.query)}>Remove Todo</button>
            </Layout>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startEditTodo: (title, todo) => dispatch(startEditTodo(title, todo)),
    startRemoveTodo: (title) => dispatch(startRemoveTodo({ title }))
})

export default connect(undefined, mapDispatchToProps)(EditTodo)