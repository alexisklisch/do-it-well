import { useState, useEffect } from "react";

export function useLocalStorage(item, defaultValue){
    const [value, setValue] = useState(defaultValue)

    useEffect(() => {
        if(!localStorage.getItem(item)) {
            localStorage.setItem(item, JSON.stringify(defaultValue))
            setValue(defaultValue)
        } else {
            setValue(JSON.parse(localStorage.getItem(item)))
            localStorage.setItem(item, JSON.stringify(value))
        }
    },[setValue])

    return [value, setValue]
}