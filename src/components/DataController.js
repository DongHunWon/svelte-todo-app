// localStorage에 데이터 저장
export const saveData = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
}

// localStorage에 데이터 불러오기
export const loadData = () => {
    try {
        // localStorage에 'data' 값 가져오기
        const data = JSON.parse(localStorage.getItem('data'));
        // data 형식 예외 처리
        if ('todo' in data && 'done' in data && 'doing' in data) {
            return data;
        }
        throw new Error();
    } catch (error) {
        return {
            todo: [],
            doing: [],
            done: []
        };
    }
}