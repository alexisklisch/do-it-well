import { useContext } from 'react'
import TodosContext from '../../context/TodosContext'
import style from './TodoCard.module.css'

export function TodoCard({todo, complete}){
    const { todoList, setTodoList, todosLS, setTodosLS } = useContext(TodosContext)

    // Function that toggle if todo was completed
    function togleCompleted(){
        const todoIndex = todoList.findIndex(item => {
            return item.todo === todo
        })
        const newTodos = [...todoList]
        newTodos[todoIndex].complete = !newTodos[todoIndex].complete
        setTodoList(newTodos)
        setTodosLS(newTodos)
    }
    
    // Function that delete a todo
    function deleteTodo(){
        const todoIndex = todoList.findIndex(item => {
            return item.todo === todo
        })
        const newTodos = [...todoList]
        newTodos.splice(newTodos[todoIndex], 1)
        
        setTodoList(newTodos)
        setTodosLS(newTodos)
    }

    return (
        <article className={`${style.todoCard} container-1 ${complete ? style.complete : ''}`}>
            <button onClick={togleCompleted} className={`${style.button} ${style.checkButton}`}>
                <svg viewBox="0 0 24 24">
                    <path fill={complete ? '#047C75' : '#81828C'} d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5l8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"/>
                </svg>
            </button>
            <p className={style.todoText}>{todo}</p>

            <button onClick={deleteTodo} className={`${style.button}  ${style.closeButton}`}>
                <svg viewBox="0 0 24 24">
                    <path fill="#4e505e" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/>
                </svg>
            </button>
        </article>
    )
}