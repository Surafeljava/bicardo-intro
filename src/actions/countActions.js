const Increment = (by) => {
    return {
        type: 'INCREMENT',
        payload: by
    }
}

const Decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export { Increment, Decrement }