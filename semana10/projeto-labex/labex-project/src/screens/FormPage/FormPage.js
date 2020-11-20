import React, {useState} from "react"
import {useInput} from "../../hooks/useInput"
import {FormContainer, Input, Select, Title, SendButton, BackButton, ButtonContainer, InputDescription} from "./styles"
import {useHistory, useParams} from "react-router-dom"
import {baseUrl} from "../../constants/url"
import axios from "axios"


const FormPage= (props) => {
  const [name, setName] = useInput({})
  const [age, setAge] = useInput({})
  const [applicationText, setApplicationText] = useInput({})
  const [profession, setProfession] = useInput({})
  const [country, setCountry] = useState(null)
  const history = useHistory()
  const pathParams = useParams()
  const id = pathParams.id
 
  
  
//rota para voltar lista viagens   
    const goToAllTripsPage = () => {
        history.push("/alltrips")
    }

//requisição aplicação viagem
    const applyToTrip = () => {
        console.log("teste", applyToTrip)
        const body = {
            name:name,
            age:age,
            applicationText:applicationText,
            profession:profession,
            country: country
        }
        axios.post(`${baseUrl}trips/${id}/apply`, body)
        .then(() => {
            alert("Cadastro efetuado com sucesso")
            console.log("yeeey")
            
        }).catch(error => {
            alert("Erro ao cadastrar. Tente novamente.")
            console.log(error, "ruuuuuim!")
        } )
    }
    
        const handleSelect = (event) => {
        setCountry(event.target.value)
    }
     return(
       <div>
           <Title>Participe do processo de seleção</Title>
        <FormContainer>
            <Input
            placeholder="Nome"
            type="text"
            value={name}
            onChange={setName}
            pattern=" [A-z0-9À-ž\s]{3,}"
            />
            <Input
            placeholder="Idade"
            type="number"
            min="19"
            value={age}
            onChange={setAge}
            />
            <InputDescription
            placeholder="Vocês devem me escolher porque..."
            type="text"
            value={applicationText}
            onChange={setApplicationText}
            pattern=" [A-z0-9À-ž\s]{30,}"
            />
            <Input
            placeholder="Profissão"
            type="text"
            value={profession}
            onChange={setProfession}
            pattern=" [A-z0-9À-ž\s]{10,}"
            />
            <Select onChange={handleSelect}>
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
            </Select>
           
        </FormContainer>
        <ButtonContainer>
         <SendButton onClick={applyToTrip}>ENVIAR</SendButton>
         <BackButton onClick={goToAllTripsPage}>VOLTAR</BackButton>
        </ButtonContainer> 
         </div>
    )
}

export default FormPage