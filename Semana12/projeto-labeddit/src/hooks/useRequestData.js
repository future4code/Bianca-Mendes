  
import React, {useEffect, useState} from "react"
import axios from "axios"

export function useRequestData(url,initialState) {
 const [data, setData] = useState(initialState)

    const getFunction = () => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }})
        .then((response) => {
            setData(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
 
    useEffect(()=> {
       getFunction()
    }, [url])

    return [data, getFunction]
    
}