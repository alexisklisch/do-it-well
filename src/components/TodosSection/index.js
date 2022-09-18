import { TodosCompletedText } from "../TodosCompletedText"
import { TodosContainer } from "../TodosContainer"

export function TodosSection(){
    return (
        <section>
            <TodosCompletedText/>
            <TodosContainer/>
        </section>
    )
}