import { useContext } from "react"
import TodosContext from "../../context/TodosContext"
import {TodosContainer} from "../TodosContainer"
import { TodosCompletedText } from "../TodosCompletedText"

export function TodosSection(){
    const {todos} = useContext(TodosContext)
    
    return (
        <section>
            <TodosCompletedText todos={todos}/>
            <TodosContainer todos={todos}/>
        </section>
    )
}