export const url = 'http://localhost:3001/'

export const refactorDate = (date) => {
    date = date.slice(0, 10);
    const y = date.slice(0, 4);
    const m = date.slice(5, 7);
    const d = date.slice(8);

    return `${d}.${m}.${y}`
}