export const addTodo = todo => {
    return {
        type: 'addTodo',
        todo
    }
};

export const deleteTodo = index => {
    return {
        type: 'deleteTodo',
        index
    }
};
