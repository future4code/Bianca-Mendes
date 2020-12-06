import {useEffect} from "react"
import {useHistory} from "react-router-dom"

export function useProtectedPage() {
  const history = useHistory()

  useEffect(() => {
      const token = localStorage.getItem("token")

      if(!token) {
          history.push("/")
          alert("Você não esta logado!")
      }
  }, [history])
}