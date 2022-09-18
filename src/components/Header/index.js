import { Logo } from "../Logo";
import { SearchInput } from "../SearchInput";
import style from './Header.module.css'

export function Header(){
    return (
        <header className={`container-1 ${style.header}`}>
            <Logo/>
            <SearchInput/>
        </header>
    )
}