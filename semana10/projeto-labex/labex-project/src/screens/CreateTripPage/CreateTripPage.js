import React, {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import {baseUrl} from "../../constants/url"
import axios from "axios"

const CreateTripPage = () => {
 const history = useHistory()
 const [name, setName] = useState("")
 const [planet, setPlanet] = useState("")
 const [date, setDate] = useState("")
 const [description, setDescription] = useState("")
 const [durationInDays, setDurationInDays] = useState("")

    const goToTripsManagerPage = () => {
        history.push("/managerarea")
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePlanet = (e) => {
        setPlanet(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleDuration = (e) => {
        setDurationInDays(e.target.value)
    }

    
    useEffect(() => {
        const token = localStorage.getItem("token")
    
        if (token) {
          history.push("/managerarea/create")
        } 
        
    }, [history])

//requisição para entrar criar viagem - área privada
      const createTrip = () => {
          
          const body = {
              name: name,
              planet: planet,
              date: date,
              description: description,
              durationInDays: durationInDays
          }

          axios.post(`${baseUrl}trips`, body,  {
            headers: {
              auth: localStorage.getItem("token")
            }
          })
          .then((res) => {
            alert("Cadastro efetuado com sucesso")
            console.log("yeeey")
          })
          .catch((err) => {
              console.log(err, "deu ruim")
              alert("Erro ao cadastrar. Tente novamente.")
          })
      }


        return (
    <div>
        <div>criar viagens</div>
        <input
        value={name}
        placeholder="Nome da viagem"
        type="text"
        onChange={handleName}
        />
        <input
        value={planet}
        placeholder="Planeta"
        type="text"
        onChange={handlePlanet}
        />
         <input
        value={date}
        placeholder="Data"
        type="date"
        onChange={handleDate}
        />
        <input
        value={description}
        placeholder="Descrição"
        type="text"
        onChange={handleDescription}
        />
        <input
        value={durationInDays}
        placeholder="Duração em dias"
        type="text"
        onChange={handleDuration}
        />
        <button onClick={createTrip}>CRIAR VIAGENS</button>
        <button onClick={goToTripsManagerPage} >VOLTAR</button>
    </div>
  )
}

export default CreateTripPage