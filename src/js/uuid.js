export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const rn = Math.random() * 16 | 0, i = c == 'x' ? rn : (rn & 0x3 | 0x8);
        return i.toString(16)
    })
}