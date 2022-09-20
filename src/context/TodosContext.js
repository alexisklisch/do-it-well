import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { fakeTodos } from "../handler/fakeTodos"

const Context = createContext({})

export function TodosContext({children}){
    const [todos, setTodos ] = useLocalStorage('TODOS_V1', fakeTodos)


    return(
        <Context.Provider value={{
            todos, setTodos
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context