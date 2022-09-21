import { useContext } from "react"
import TodosContext from "../../context/TodosContext";
import style from './CircleButton.module.css'

export function CircleButton({icon, children, green, disabled}){
    const { openModal, setOpenModal } = useContext(TodosContext)
    function openModalBox(){
        setOpenModal(!openModal)
    }

    return (
        <button
            onClick={openModalBox}
            className={`${style.circleButton} ${green ? style.green : ''}`}
            disabled={disabled && true}
            >
            <img className={style.icon} src={icon}/>
            {children}
        </button>
    )
}