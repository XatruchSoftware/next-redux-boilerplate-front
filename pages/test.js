import { connect } from 'react-redux'
import Link from 'next/link'

import { removeTodo } from '../redux/actions/todos'

const Test = ({ todos, removeTodo }) => (
    <div>
        Todos:
        <p>{JSON.stringify(todos)}</p>
        <button onClick={() => removeTodo({ title: 'hello', body: 'there' })}>remove todo</button>
        <Link href="/">
            <a>Home</a>
        </Link>
    </div>
)

Test.getInitialProps = async ({ reduxStore }) => {
    const todos = await reduxStore.getState()
    return { todos }
}

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (todo) => dispatch(removeTodo(todo))
})

const mapStateToProps = (state) => ({
    todos: state
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)