import { useEffect } from "react";
import { TodoCard } from "../TodoCard"
import style from './TodosContainer.module.css'

export function TodosContainer({todos, setTodos}){
    return (
        <div className={style.todosContainer}>
            {todos.map(todo => <TodoCard
                text={todo.text}
                complete={todo.complete}
                key={todo.text}
                setTodos={setTodos}
                />)}
        </div>
    )
}