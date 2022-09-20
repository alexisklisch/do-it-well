import { useContext } from 'react'
import TodosContext from '../../context/TodosContext'
import style from './SearchInput.module.css'

export function SearchInput(){
    const { searchValue, setSearchValue } = useContext(TodosContext)
    const updateSearchValue = e => {
        setSearchValue(e.target.value)
    }

    return (
        <input onInput={updateSearchValue} className={style.searchInput} placeholder='Clean the...'/>
    )
}