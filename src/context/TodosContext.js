import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { fakeTodos } from "../handler/fakeTodos"

const Context = createContext({})

export function TodosContext({children}){
    // Todos saved in localStorage
    const [todos, setTodos ] = useLocalStorage('TODOS_V1', fakeTodos)
    // Search Value
    const [searchValue, setSearchValue] = useState('');


    return(
        <Context.Provider value={{
            todos, setTodos,
            searchValue, setSearchValue
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context