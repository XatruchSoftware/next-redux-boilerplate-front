import { postTodo, getTodos, deleteTodo, putTodo } from '../../lib/todos'

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

export const removeTodo = (title) => ({
    type: 'REMOVE_TODO',
    title
})

export const startRemoveTodo = ({ title } = {}) => {
    return async (dispatch, getState) => {
        try {
            const { todo } = await deleteTodo(title)
            dispatch(removeTodo(todo.title))
        } catch (error) {
            console.warn('Error', error.message)
        }
    }
}

export const editTodo = (title, updates) => ({
    type: 'EDIT_TODO',
    title,
    updates
})

export const startEditTodo = (title, updates) => {
    return async (dispatch, getState) => {
        try {
            const response = await putTodo(title, updates)
            dispatch(editTodo(title, response.updatedTodo))
        } catch (error) {
            console.warn('Error', error.message)
        }
    }
}

export const setTodos = ({ todos } = {}) => ({
    type: 'SET_TODOS',
    todos
})