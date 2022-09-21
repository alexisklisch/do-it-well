import {TodosContext} from "../context/TodosContext"
import { AppUI } from "./AppUI"


export function App(){

    return(
        <TodosContext>
            <AppUI/>
        </TodosContext>
    )
}