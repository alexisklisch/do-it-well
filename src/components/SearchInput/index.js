import style from './SearchInput.module.css'
import { useContext } from "react"
import TodosContext from "../../context/TodosContext"

export function SearchInput(){
    const { setSearchValue } = useContext(TodosContext)
    

    function filterTodos(e){
        setSearchValue(e.target.value)
    }

    return (
        <input onChange={filterTodos} className={style.searchInput} placeholder='🔍'/>
    )
}