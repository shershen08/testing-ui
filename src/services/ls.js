const appData = 'appData'
export const saveData = (data) => {
    let newValue;
    try {
        const prevValue = JSON.parse(localStorage.getItem(appData))
        newValue = {...prevValue, ...data}
    } catch(e) {
        newValue = {...data}
    }
    localStorage.setItem(appData, JSON.stringify(newValue))
}
export const clearData = () => {
    localStorage.setItem(appData, '')
}