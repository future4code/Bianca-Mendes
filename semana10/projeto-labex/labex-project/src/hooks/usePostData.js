import React, { useEffect, useState } from "react"
import axios from "axios"

export function usePostData(url, body) {
 const [data, setData] = useState([])

    
    useEffect(()=> {
        axios.post(url,body)
        .then(() => {
           // setData(data)
        })
        .catch((err) => {
            console.log(err, "deu ruuuuim")
        })
    }, [url, body])

    return data
    
}