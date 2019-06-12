const todosReducerDefaultState = []

const reducer = (state = todosReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo]
        case 'REMOVE_TODO':
            return state.filter(({ title }) => title !== action.title)
        case 'EDIT_TODO':
            return state.map((todo) => {
                if (todo.title === action.title) {
                    return {
                        ...todo,
                        ...action.updates
                    }
                } else {
                    return todo
                }
            })
        case 'SET_TODOS':
            return [...action.todos]
        default:
            return state
    }
}

export { 
    todosReducerDefaultState,
    reducer as default 
}