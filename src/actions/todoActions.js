import axios from 'axios';

const UpdateTodo = (id, text) => {
    return {
        type: 'UPDATE_TODO',
        payload: {
            id,
            text
        }
    }
}

const TodoLoading = () => {
    return {
        type: 'TODO_LOADING'
    }
}

const TodoError = (error) => {
    return {
        type: 'TODO_ERROR',
        payload: error
    }
}

const FetchTodos = (todos) => {
    return (dispatch) => {
        dispatch(TodoLoading)
        axios.get('https://jsonplaceholder.typicode.com/todos/3')
            .then(res => {
                const todos = res.data;
                dispatch(UpdateTodo(todos.id, todos.title));
            })
            .catch(err => {
                dispatch(TodoError(err.message));
            });
    }
}

export { UpdateTodo, FetchTodos, TodoError, TodoLoading };