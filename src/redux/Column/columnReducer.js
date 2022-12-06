import { ADD_COLUMN } from "./columnTypes";
import { ADD_CARD } from "./columnTypes";

const initialState = []


const columnReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_COLUMN: return [
                                    ...state,
                                    {   
                                        name:action.payload,
                                        tasks:[]
                                     }
                                ]

        case ADD_CARD: return  [...state].map((row,key)=>key===action.payload.column?{...row,tasks:[...row.tasks,{name:action.payload.taskName}]}:row)    
                                
        default: return state
    }

}

export default columnReducer