import style from './TodosCompletedText.module.css'

export function TodosCompletedText({todos}){
    return (
        <p className={style.todosCompletedText}>
            <span>{todos.filter(todo => todo.complete).length}</span> of <span>{todos.length}</span> todos.
        </p>
    )
}