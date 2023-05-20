const initState = {
    themeId: 1,
}

export type StateType = {
    themeId: number
}

type ChangeThemeIdACType = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state = initState, action: ChangeThemeIdACType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdACType => ({ type: 'SET_THEME_ID', id }) // fix any
