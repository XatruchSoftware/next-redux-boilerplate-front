import TodoListItem from './TodoListItem'
import { connect } from 'react-redux'

const TodoList = ({ todos }) => (
    <ul>
        {todos.map((todo) => <TodoListItem key={todo.title} {...todo} />)}
    </ul>
)

const mapStateToProps = (state) => ({
    todos: state
})

export default connect(mapStateToProps)(TodoList)