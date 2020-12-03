import {useState} from "react"

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues)

  const onChange = (value, name) => {
    setForm({...form, [name]: value})
  }

  const resetState = () => {
      setForm(initialValues)
  }
 
  return {form, onChange, resetState}
}

