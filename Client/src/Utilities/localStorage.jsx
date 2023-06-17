
export const loadData = (key) => {
    let temp = localStorage.getItem(key)
    temp = JSON.parse(temp)
    return temp

}

export const saveData = (key, value) => {
    return (
        localStorage.setItem(key, JSON.stringify(value))
    )
}