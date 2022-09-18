import style from './TodoCard.module.css'

export function TodoCard({todo, complete}){
    return (
        <article className={`${style.todoCard} container-1 ${complete ? style.complete : ''}`}>
            <button className={`${style.button} ${style.checkButton}`}>✅</button>
            <p className={style.todoText}>{todo}</p>
            <button className={`${style.button}  ${style.closeButton}`}>❌</button>
        </article>
    )
}