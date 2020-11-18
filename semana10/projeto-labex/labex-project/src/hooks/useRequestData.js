import React, { useEffect, useState } from "react"
import axios from "axios"

export function useRequestData(url,initialState) {
 const [data, setData] = useState(initialState)

    useEffect(()=> {
        axios.get(url)
        .then((response) => {
            setData(response.data)
        })
        .catch((err) => {
            console.log(err, "deu ruuuuim")
        })
    }, [url])

    return data
    
}