import { useState, useEffect } from "react";


export function useLocalStorage(item, value) {
    const [items, setItems] = useState(value)
    console.log(items)

    useEffect(() => {
        const localStorageItem = localStorage.getItem(item)
        if(!localStorageItem) {
            localStorage.setItem(item, JSON.stringify(value))
            setItems(value)
        } else {
            localStorage.setItem(item, JSON.stringify(items))
            setItems(JSON.parse(localStorageItem))
        }
    }, [setItems])

    return [ items, setItems ]
}