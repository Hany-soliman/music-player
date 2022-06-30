const getElement = (select)=>{
    const element = document.querySelector(select)
    if (element) return element
    throw new Error('No element selected')
}

export {getElement}