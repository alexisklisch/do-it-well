import { useLocalStorage } from "../../hooks/useLocalStorage"
import { TodosCompletedText } from "../TodosCompletedText"
import { TodosContainer } from "../TodosContainer"
import { fakeTodos } from "../../handler/fakeTodos"

export function TodosSection(){
    const [ todos, setTodos ] = useLocalStorage('TODOS_V1', fakeTodos)
    
    return (
        <section>
            <TodosCompletedText todos={todos}/>
            <TodosContainer todos={todos} setTodos={setTodos}/>
        </section>
    )
}