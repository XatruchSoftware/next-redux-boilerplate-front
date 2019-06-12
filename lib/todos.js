import axios from 'axios'

const baseUrl = "http://localhost:4000"

export const getTodos = async () => {
    const { data } = await axios.get(`${baseUrl}/todos`)
    return data
}

export const postTodo = async (todo) => {
    const { data } = await axios.post(`${baseUrl}/todos`, { ...todo })
    return data
}

export const deleteTodo = async (title) => {
    const { data } = await axios.delete(`${baseUrl}/todos/${title}`)
    return data
}

export const putTodo = async (title, updates) => {
    const { data } = await axios.put(`${baseUrl}/todos/${title}`, {...updates})
    return data
}