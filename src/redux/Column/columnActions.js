import { ADD_COLUMN } from "./columnTypes"
import { ADD_CARD } from "./columnTypes"
import { DELETE_COLUMN } from "./columnTypes"
import shortid from 'shortid';

export const addColumn =(columnTitle)=>{
                return{
                    id:shortid.generate(),
                    type: ADD_COLUMN,
                    payload:columnTitle
                }
        
            }

export const addCard =(column=0,taskName="")=>{
                return{
                    type: ADD_CARD,
                    id:shortid.generate(),
                    payload:{column,taskName}
                }

            }

export const deleteColumn =(column=0,taskName="")=>{
                return{
                    type: DELETE_COLUMN,
                    payload:{column,taskName}
                }

            }
