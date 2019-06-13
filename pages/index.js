import { setTodos } from '../redux/actions/todos'
import { getTodos } from '../lib/todos'
import Layout from '../components/Layout'
import TodoList from '../components/TodoList'

class Index extends React.Component {
    static async getInitialProps({ reduxStore, req }) {
        const todos = await getTodos() 
        reduxStore.dispatch(setTodos(todos))
        return { ...todos }
    }
    render () {
        return (
            <Layout title="Home">
                <TodoList />
            </Layout>
        )
    }
}

const mapStatetoProps = (state) => ({
    todos: state
})

const mapDispatchToProps = (dispatch) => ({
    startAddTodo: (todo) => dispatch(startAddTodo(todo)),
    startRemoveTodo: (todo) => dispatch(startRemoveTodo(todo)),
    startEditTodo: (title, todo) => dispatch(startEditTodo(title, todo))
})

export { Index as default }