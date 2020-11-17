import axios from "axios"
import {useState, useEffects} from "react"

export function useRequestData(url, initialState) {
    const [data, setData] = useState(initialState)

    useEffects(() => {
        axios.get(url)
        .then((response) => {
            setData(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [url])

    return data
}