import { createContext, useState } from "react"
import { fakeTodos } from "../handler/fakeTodos"
import { useLocalStorage } from "../hooks/useLocalStorage"

const Context = createContext({})

export function TodosContext({children}){
    const [ searchValue, setSearchValue] = useState('')
    const [ todoList, setTodoList ] = useState(fakeTodos)
    const [ todosLS, setTodosLS ] = useLocalStorage('TODOS_V1', [])

    return(
        <Context.Provider value={({
            searchValue, setSearchValue,
            todoList, setTodoList,
            todosLS, setTodosLS
        })}>
            {children}
        </Context.Provider>
    )
}

export default Context