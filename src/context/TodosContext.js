import { createContext, useState } from "react"
import { fakeTodos } from "../handler/fakeTodos"

const Context = createContext({})

export function TodosContext({children}){
    const [ searchValue, setSearchValue] = useState('')
    const [ todoList, setTodoList ] = useState(fakeTodos)

    return(
        <Context.Provider value={({
            searchValue, setSearchValue,
            todoList, setTodoList
        })}>
            {children}
        </Context.Provider>
    )
}

export default Context