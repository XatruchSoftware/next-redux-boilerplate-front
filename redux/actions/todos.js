import { postTodo, getTodos, deleteTodo } from '../../lib/todos'

export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo
})

export const startAddTodo = (todo) => {
    return async (dispatch, getState) => {
        try {
            const response = await postTodo(todo)
            dispatch(addTodo({ ...response.todo }))
        } catch (error) {
            console.warn('Error', error.message)
        }
    }
}

export const removeTodo = ({ title } = {}) => ({
    type: 'REMOVE_TODO',
    title
})

export const startRemoveTodo = ({ title } = {}) => {
    return async (dispatch, getState) => {
        try {
            const response = await deleteTodo(title)
            console.log(response)
            dispatch(removeTodo({ ...response.todo }))
        } catch (error) {
            console.warn('Error', error.message)
        }
    }
}

export const setTodos = ({ todos } = {}) => ({
    type: 'SET_TODOS',
    todos
})