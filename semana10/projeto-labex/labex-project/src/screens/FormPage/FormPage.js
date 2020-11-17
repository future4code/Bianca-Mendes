import React, {useState} from "react"
import axios from "axios"
import {useInput} from "../../hooks/useInput"
import {FormContainer, Input} from "./styles"
import {useHistory} from "react-router-dom"

const FormPage= () => {
  const [name, setName] = useInput()
  const [age, setAge] = useInput()
  const [applicationText, setApplicationText] = useInput()
  const [profession, setProfession] = useInput()
  const history = useHistory()
  
    

    const goToAllTripsPage = () => {
        history.push("/alltrips")
    }
   return(
       <div>
        <FormContainer>
            <Input
            placeholder="Nome"
            type="text"
            value={name}
            onChange={setName}
            />
            <Input
            placeholder="Idade"
            type="number"
            min="19"
            value={age}
            onChange={setAge}
            />
            <Input
            placeholder="Vocês devem me escolher porque..."
            type="text"
            value={applicationText}
            onChange={setApplicationText}
            />
            <Input
            placeholder="Profissão"
            type="text"
            value={profession}
            onChange={setProfession}
            />
            <select>
            <option value="país">Pais</option>  
            <option value={"Brasil"}>Brasil</option>
            <option value={"Argentina"}>Argentina</option>
            <option value={"Bolívia"}>Bolívia</option>
            <option value={"Chile"}>Chile</option>
            <option value={"Colômbia"}>Colômbia</option>        
            <option value={"Equador"}>Equador</option>
            <option value={"Guiana Francesa"}>Guiana Francesa</option>
            <option value={"Guiana"}>Guiana</option>
            <option value={"Paraguai"}>Paraguai</option>
            <option value={"Peru"}>Peru</option>
            <option value={"Suriname"}>Suriname</option>
            <option value={"Uruguai"}>Uruguai</option>
            <option value={"Venezuela"}>Venezuela</option>
            </select>
           
        </FormContainer>
         <button>ENVIAR</button>
         <button onClick={goToAllTripsPage}>VOLTAR</button>
         </div>
    )
}

export default FormPage