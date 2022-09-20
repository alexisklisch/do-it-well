import { useContext } from "react"
import TodosContext from "../../context/TodosContext"
import {TodosContainer} from "../TodosContainer"
import { TodosCompletedText } from "../TodosCompletedText"

export function TodosSection(){
    const {todos, searchValue} = useContext(TodosContext)
    let searchedTodos = []

    if(searchValue.length > 0){
        searchedTodos = todos.filter(todo => {
            return todo.text.toLowerCase()
                .includes(searchValue.toLowerCase())
        })
    }else{
        searchedTodos = todos
    }
    
    return (
        <section>
            <TodosCompletedText todos={searchedTodos}/>
            <TodosContainer todos={searchedTodos}/>
        </section>
    )
}