export const saveData = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
}

export const loadData = () => {
    try {
        const data = JSON.parse(localStorage.getItem('data'));
        if (typeof data === 'boolean' ||
            Array.isArray(data) ||
            !('todo' in data && 'done' in data && 'doing' in data)
        ) {
            throw new Error();
        }
        return data;
    } catch (error) {
        return {
            todo: [],
            doing: [],
            done: []
        };
    }
    // return typeof data === 'object' ? JSON.parse(data) : {todo: [], doing: [], done: []};
}