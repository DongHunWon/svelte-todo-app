export const saveData = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
}

export const loadData = () => {
    const data = localStorage.getItem('data');
    if (data) {
        return JSON.parse(data);
    }
    return [];
}