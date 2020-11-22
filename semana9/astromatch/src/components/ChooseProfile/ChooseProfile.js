import React, { useState, useEffect } from 'react'
import {PostContainer} from "./styles"
import {baseUrl} from "../../constants/url"
import axios from 'axios'
import Profile from '../Profile/Profile'
import Matchs from '../Matchs/Matchs'
import Header from '../Header/Header'


export default function ChooseProfile(props) {
 const [profile, setProfile] = useState([])
 const [matchs, setMatchs] = useState(false) //pra renderizar os matchs
    
//faz requisição dos perfis(todos) para a API
    const getProfileToChoose = () => {
        axios.get(`${baseUrl}person`)
            .then(response => {
                setProfile(response.data.profile)
            }).catch(error => {console.log(error)})
    }

//monta renderização dos perfis 
    useEffect(() => {
        getProfileToChoose()
    }, ([]))  //props.renderChooseProfile tava dentro 

//guarda na API o perfil escolhido(botão oh yes)    
    const choosePerson = () => {
        const body = {
            id: profile.id,
            choice: true
        }

        axios.post(`${baseUrl}choose-person`, body)
            .then(() => {
                alert("Será que vai dar match?!")
                getProfileToChoose() //pra em seguida já aparecer outro perfil
            }).catch(err => {console.log(err)})
    }

//pra chamar a função e continuar mostrando os perfis, da pra fazer sem essa parte que tbm funciona     
    const dontChoosePerson = () => {
        getProfileToChoose()
    }

    const allMatchs = () => {
        setMatchs(!matchs) // pra transformar o match em true e mostrar as infos
    }

//requisição para limpar a API com todos os matchs
    const clearMatchs = (props) => {
        axios.put(`${baseUrl}clear`)
            .then(() => {
                alert("Perfis e matchs apagados!")
                allMatchs()
            }).catch(err => {console.log(err)})
    }

    return (
        <PostContainer>
            <Header />
            {matchs ?
                <Matchs
                    backPage={allMatchs}
                    matchs={matchs}
                    clearMatchs={clearMatchs}
                />
                : <Profile
                    name={profile.name}
                    age={profile.age}
                    bio={profile.bio}
                    photo={profile.photo}
                    choosePerson={choosePerson}
                    dontChoosePerson={dontChoosePerson}
                    allMatchs={allMatchs}
                    clearMatchs={clearMatchs}
                />
            }
        </PostContainer>
    )
}
