import { ADD_COLUMN } from "./columnTypes";
import { ADD_CARD } from "./columnTypes";

const initialState = []


const columnReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_COLUMN: return [
                                    ...state,
                                    {
                                        name:"to-do",
                                        tasks:[{ id:1,name:"to use redux"},{ id:2,name:"to complete task tomorrow"}]
                                     }
                                ]

        case ADD_CARD: return [

            {
                ...state[0].task,
                tasks: [...state[0].tasks,{ id:1,name:"to use redux"}]
            },
            ...state.slice(1)
        ]

        default: return state
    }

}

export default columnReducer