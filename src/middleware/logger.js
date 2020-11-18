// takes in the store as well as well as the action
//show anytime a new action is dispatched as well as what 
//the new state is oing to be after it has been dispatched

const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('The action: ', action)
    const returnValue = next(action)
    console.log('The new state: ', store.getState())
    console.groupEnd()

    return returnValue
}

export default logger;