import axios from "axios"
import React, {useState} from "react"
import {FormContainer, Input, Select, Title, SendButton, BackButton, ButtonContainer, InputDescription} from "./styles"
import {useHistory, useParams} from "react-router-dom"
import {baseUrl} from "../../constants/url"
import {useForm} from "../../hooks/useForm"


const FormPage= (props) => {
 const {form, onChange, resetState} = useForm({name: "", age: "", applicationText: "", profession: ""})
 const [country, setCountry] = useState(null)
 const history = useHistory()
 const pathParams = useParams()
 const id = pathParams.id
 
    const handleInput = (event) => {
       const {value, name} = event.target
       onChange(value, name)
  }
  
//rota para voltar lista viagens   
    const goToAllTripsPage = () => {
        history.push("/alltrips")
    }

//requisição aplicação viagem
    const applyToTrip = (event) => {

        event.preventDefault();
        
        const body = {
            name:form.name,
            age:form.age,
            applicationText:form.applicationText,
            profession:form.profession,
            country: country
        }
        axios.post(`${baseUrl}trips/${id}/apply`, body)
        .then(() => {
            resetState()
            alert("Cadastro efetuado com sucesso")
        }).catch(error => {
            alert("Erro ao cadastrar. Tente novamente.")
        })
    }
    
        const handleSelect = (event) => {
        setCountry(event.target.value)
    }
     return(
       <div>
           <Title>Participe do processo de seleção</Title>
        <FormContainer>
            <form onSubmit={applyToTrip}>
            <Input
            placeholder="Nome"
            type="text"
            value={form.name}
            name="name"
            onChange={handleInput}
            pattern=" [A-z0-9À-ž\s]{3,}"
            required
            />
            <Input
            placeholder="Idade"
            type="number"
            min="19"
            name="age"
            value={form.age}
            onChange={handleInput}
            required
            />
            <InputDescription
            placeholder="Vocês devem me escolher porque..."
            type="text"
            name="applicationText"
            value={form.applicationText}
            onChange={handleInput}
            pattern=" [A-z0-9À-ž\s]{30,}"
            required
            />
            <Input
            placeholder="Profissão"
            type="text"
            name="profession"
            value={form.profession}
            onChange={handleInput}
            pattern=" [A-z0-9À-ž\s]{10,}"
            required
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
            <ButtonContainer>
         <SendButton>ENVIAR</SendButton>
         <BackButton onClick={goToAllTripsPage}>VOLTAR</BackButton>
         </ButtonContainer>
         </form>
        </FormContainer>
         
     
        </div>
    )
}

export default FormPage