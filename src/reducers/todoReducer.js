const initialState = {
    id: 0,
    text: '',
    loading: false,
    error: null
};

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TODO':
            return {
                ...state,
                id: action.payload.id,
                text: action.payload.text
            };
        case 'TODO_ERROR':
            return {
                ...state,
                error: action.payload
            };
        case 'TODO_LOADING':
            return {
                ...state,
                loading: !state.loading
            };
        default:
            return state;
    }
}


export default TodoReducer;