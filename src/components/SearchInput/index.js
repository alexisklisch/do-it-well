import style from './SearchInput.module.css'

export function SearchInput(){
    return (
        <input className={style.searchInput} placeholder='Buscar'/>
    )
}