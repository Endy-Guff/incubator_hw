import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let newState = [...state]
            if (action.payload === 'up'){
                newState = state.sort((a, b)=>{
                    if (a.name>b.name){
                        return 1
                    }
                    if (a.name<b.name){
                        return - 1
                    }
                    return 0
                })
            }
            if (action.payload === 'down'){
                newState = state.sort((a, b)=>{
                    if (a.name<b.name){
                        return 1
                    }
                    if (a.name>b.name){
                        return - 1
                    }
                    return 0
                })
            }
            return newState // need to fix
        }
        case 'check': {
            return state.filter(el=>el.age>=action.payload).sort() // need to fix
        }
        default:
            return state
    }
}
