import Router from 'next/router'
import { connect } from 'react-redux'

import TodoForm from '../components/TodoForm'
import Layout from '../components/Layout'
import { startAddTodo } from '../redux/actions/todos'

class AddTodo extends React.Component {
    onSubmit = (todo) => {
        this.props.startAddTodo(todo)
        Router.push('/')
    }

    render() {
        return (
            <Layout title="Add Todo">
                <TodoForm onSubmit={this.onSubmit}/>
            </Layout>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddTodo: (todo) => dispatch(startAddTodo(todo))
})

export default connect(undefined, mapDispatchToProps)(AddTodo)