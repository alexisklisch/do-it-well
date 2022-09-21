import { useRef, useContext } from "react"
import style from "./ModelBox.module.css"
import TodoContex from "../../context/TodosContext"

export function ModalBox(){
    const { setOpenModal, todos, setTodos } = useContext(TodoContex)

    const cancelNewTodo = useRef()
    const addNewTodo = useRef()
    const textInputValue = useRef()

    function handleCloseModal(e){
        cancelNewTodo.current.contains(e.target)
            ? setOpenModal(false)
            : null
    }
    function handleAddNewTodo(e){
        if(addNewTodo.current.contains(e.target)){
            const newTodo = textInputValue.current.value
            const newTodoList = [...todos]
            newTodoList.unshift({text: newTodo, complete: false})
            setTodos(newTodoList)
            setOpenModal(false)
        }

    }

    return (
        <div className={style.modelBox + ' container-2'}>
            <h4 className={style.boxTitle + ' container-1'}>Add a new Todo</h4>
            <textarea ref={textInputValue} className={style.textInput + ' container-1'}></textarea>
            <div className={style.buttonsContainer}>
                <button onClick={handleCloseModal} ref={cancelNewTodo} className={style.button}>Cancel</button>
                <button onClick={handleAddNewTodo} ref={addNewTodo} className={style.button}>Accept</button>
            </div>
        </div>
    )
}