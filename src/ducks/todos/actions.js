export const ADD_TODO = "todos/ADD_TODO" 

export const DELETE_TODO = "todos/DELETE_TODO"

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: {
        todo
    }
});