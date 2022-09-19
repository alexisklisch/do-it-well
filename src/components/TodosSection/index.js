import { useContext } from "react"
import TodosContext from "../../context/TodosContext"
import { TodosCompletedText } from "../TodosCompletedText"
import { TodosContainer } from "../TodosContainer"

export function TodosSection(){
    const { searchValue, todoList } = useContext(TodosContext)

    let searchedTodos = []

    if(searchValue.length > 0){
        searchedTodos = todoList.filter(todo => {
            return todo.todo
                .toLowerCase()
                .includes(searchValue.toLowerCase())
        })
    } else{
        searchedTodos = todoList
    }

    return (
        <section>
            <TodosCompletedText todos={searchedTodos}/>
            <TodosContainer todos={searchedTodos}/>
        </section>
    )
}