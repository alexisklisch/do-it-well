import style from './TodosCompletedText.module.css'

export function TodosCompletedText(){
    return (
        <p className={style.todosCompletedText}>
            <span>1</span> of <span>3</span> todos.
        </p>
    )
}