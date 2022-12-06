import { ADD_COLUMN } from "./columnTypes"
import { ADD_CARD } from "./columnTypes"

export const addColumn =(columnTitle)=>{
                return{
                    type: ADD_COLUMN,
                    payload:columnTitle
                }
        
            }

export const addCard =(column=0,taskName="")=>{
                return{
                    type: ADD_CARD,
                    payload:{column,taskName}
                }

            }