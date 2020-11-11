import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {baseUrl} from "../../constants/url"

export default function Matchs(props) {
 const [likes, setLikes] = useState([])

// faz requisição dos perfis que deram match para a API
     const getMatch = () => {
         axios.get(`${baseUrl}matches`)
         .then(response => {
            setLikes(response.data.matches) //matches da api
            console.log("yeeey")
         }).catch(error => console.log(error, "ruuuuuim!"))
     }

// atualiza a lista de matchs, e pra isso usa props que pega a lista de like lá do ChooseProfile    
     useEffect( () => {
         getMatch()
    }, ([props.matchs])) //mesma lógica do pokemon, mas ainda não entendi direito

    return (
    <div>
      {likes.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <img src={item.photo}/>
          </div>
        )
      })}

      <button onClick={props.backPage}>VOLTAR</button>
      <button onClick={props.clearMatchs}>LIMPAR</button>
    </div>
    )
}