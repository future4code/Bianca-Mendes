import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {PostContainer} from "./styles"
import {baseUrl} from "../../constants/url"
import axios from 'axios'
import Profile from '../Profile/Profile'
import Matchs from '../Matchs/Matchs'


export default function ChooseProfile() {
 const [profile, setProfile] = useState([])
 const [matchs, setMatchs] = useState(false) //pra renderizar os matchs
 //const [clear, setClear] = useState("")


//faz requisição dos perfis(todos) para a API
   const getProfileToChoose = () => {
        axios.get(`${baseUrl}person`)
        .then(response => {
            setProfile(response.data.profile)
            console.log("certinho")
        }).catch(error => {console.log(error, "deu ruim!")})
    }


//monta renderização dos perfis 
    useEffect( () => {
        getProfileToChoose()
        console.log("montando")
    }, ([]))
    

//guarda na API o perfil escolhido(botão oh yes)    
    const choosePerson = () => {
        const body = {
            id: profile.id,
            choice: true
        }

        axios.post(`${baseUrl}choose-person`, body)
        .then(() => {
            alert("Deu Match!")
            getProfileToChoose() //pra em seguida já aparecer outro perfil
            console.log("certoooo")
        }).catch(err => {console.log(err, "ruim de novo")})
    }


//pra chamar a função e continuar mostrando os perfis, da pra fazer sem essa parte que tbm funciona     
    const dontChoosePerson = () => {
       getProfileToChoose()
    }


    const allMatchs = () => {
       setMatchs(!matchs) // pra transformar o match em true e mostrar as infos
    }


//requisição para limpar a API com todos os matchs
    const clearMatchs = () => {
        axios.put(`${baseUrl}clear`)
        .then(() => {
            alert("Perfis e matchs apagados!")
            //allMatchs()
            console.log("apagou")
        }).catch(err => {console.log(err, "não apagou")})
    }


    return (
        <PostContainer>
        
    {matchs ?
        <Matchs
            backPage={allMatchs}
            matchs = {matchs}
            clearMatchs ={clearMatchs}
        />
     :  <Profile
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
            photo={profile.photo}    
        /> 
    } 
        
        <div>
        <button onClick={choosePerson}>OH YES</button>
        <button onClick={dontChoosePerson}>NOPE</button>
        <button onClick={allMatchs}>MATCHS</button>
        <button onClick={clearMatchs}>LIMPAR</button>
        </div>
        </PostContainer>
    )
}

/* 
erros e acertos e anotações gerais: 
1.axios.get(`${baseUrl}/person`) coma barra não ia, tirei a barra e funcionou. PQ?!
resposta: na url eu já tinha deixado a barra, tapada!

2.criei uma constante chamando a função pro nome no onClick ficar mais rápido de entender

3. pra mostrar a list de match, fiz a mesma coisa que no trabalho da labefy
*/