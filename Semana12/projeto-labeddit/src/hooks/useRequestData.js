  
import React, {useEffect, useState} from "react"
import axios from "axios"

export function useRequestData(url,initialState) {
 const [data, setData] = useState(initialState)

    const axiosAuth = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    const getFunction = () => {
        axios.get(url,axiosAuth)
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