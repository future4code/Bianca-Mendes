import React, {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import {baseUrl} from "../../constants/url"
import axios from "axios"

const CreateTripPage = () => {
 const history = useHistory()
 const [name, setName] = useState("")
 const [date, setDate] = useState("")
 const [description, setDescription] = useState("")
 const [durationInDays, setDurationInDays] = useState("")
 const [planet, setPlanet] = useState(null)

    const goToTripsManagerPage = () => {
        history.push("/managerarea")
    }

    const handleName = (e) => {
        setName(e.target.value)
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

    const handleSelect = (event) => {
        setPlanet(event.target.value)
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
        pattern="[A-Za-z]{5,}"
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
        pattern="[A-Za-z]{30,}"
        />
        <input
        value={durationInDays}
        min="50"
        placeholder="Duração em dias"
        type="text"
        onChange={handleDuration}
        />
         <select onChange={handleSelect}>
            <option value="país">Planeta</option>  
            <option value={"Mercúrio"}>Mercúrio</option>
            <option value={"Vênus"}>Vênus</option>
            <option value={"Terra"}>Terra</option>
            <option value={"Marte"}>Marte</option>
            <option value={"Júpiter"}>Júpiter</option>        
            <option value={"Saturno"}>Saturno</option>
            <option value={"Urano"}>Urano</option>
            <option value={"Netuno"}>Netuno</option>
            <option value={"Plutão"}>Plutão</option>
        </select>
        <button onClick={createTrip}>CRIAR VIAGENS</button>
        <button onClick={goToTripsManagerPage} >VOLTAR</button>
    </div>
  )
}

export default CreateTripPage