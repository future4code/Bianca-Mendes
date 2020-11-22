import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { baseUrl } from "../../constants/url"
import {Title, NameProfile, ImgProfile, MatchDetails, ButtonContainer, BackButton, ClearButton, MatchMessage } from "./styles"
import backbutton from "../../img/back-button.png"
import garbage from "../../img/garbage.png"
import Details from '../Details/Details'

export default function Matchs(props) {
 const [likes, setLikes] = useState([])
 const [details, setDetails] = useState(false)
 const [index, setIndex] = useState("") //pra pegar a informação de um em específico e não mostrar todos
 
// faz requisição dos perfis que deram match para a API
     const getMatch = (props) => {
          axios.get(`${baseUrl}matches`)
         .then(response => {
            setLikes(response.data.matches) //matches da api
            console.log("yeeey")
         }).catch(error => console.log(error, "ruuuuuim!"))
      }

// atualiza a lista de matchs, e pra isso usa props que pega a lista de matchs lá do ChooseProfile    
     useEffect( () => {
         getMatch()
    }, ([props.matchs])) 

// mostrar detalhes do perfil
      const detailsProfile = (index) => {
        console.log("clicou")
        setDetails(true)
        setIndex(index)
      }    

// fechar card detalhes
      const closeDetailsProfile = () => {
        setDetails(false)
        console.log("botao fechar")
      }

    return (
    <div>
      <Title>Lista de matchs</Title>
       {likes.map((item,index) => {
          return (
              <MatchDetails key={item.id}>
                <ImgProfile src={item.photo}/>
                <NameProfile onClick={() => detailsProfile(index)}>{item.name}</NameProfile>
              </MatchDetails>
          )
        })}

        {likes.length === 0 ? <MatchMessage>Você não tem matchs</MatchMessage> : null}

        {details ? <Details 
                    goPage={detailsProfile}
                    name={likes[index].name}
                    age={likes[index].age}
                    bio={likes[index].bio}
                    close={closeDetailsProfile}
                    /> :
                    null}
      
        <ButtonContainer>
          <BackButton src={backbutton} alt={"imagem botão voltar"} onClick={props.backPage}/>
          <ClearButton src={garbage} alt={"imagem botão lata lixo"} onClick={props.clearMatchs}/>
        </ButtonContainer>
    </div>
    )
}

