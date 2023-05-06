const initState = {
    isLoading: false,
}

type InitStateType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: LoadingActionType): InitStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return (state.isLoading)?{...state, isLoading: false}:{...state, isLoading: true}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
