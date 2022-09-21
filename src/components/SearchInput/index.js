import { useContext } from 'react'
import TodosContext from '../../context/TodosContext'
import style from './SearchInput.module.css'

export function SearchInput(){
    const { searchValue, setSearchValue } = useContext(TodosContext)
    const updateSearchValue = e => {
        setSearchValue(e.target.value)
    }

    return (
        <div className={style.searchInputContainer}>
            <input onInput={updateSearchValue} className={style.searchInput} placeholder='Clean the...'/>
            {/* <img src='https://api.iconify.design/mdi:close.svg?color=%23424242'/> */}
            <img className={style.searchInputImage} src='https://api.iconify.design/mdi:clipboard-text-search-outline.svg?color=%23eeeeee'/>
        </div>
    )
}