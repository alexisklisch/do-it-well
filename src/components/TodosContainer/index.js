import { fakeTodos } from "../../handler/fakeTodos"
import { TodoCard } from "../TodoCard"
import style from './TodosContainer.module.css'

export function TodosContainer({todos}){
    return (
        <div className={style.todosContainer}>
            {fakeTodos.map(item => <TodoCard complete={item.complete} todo={item.todo} key={item.todo}/>)}
        </div>
    )
}