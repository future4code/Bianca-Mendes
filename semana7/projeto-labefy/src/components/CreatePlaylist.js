import React from "react"
import styled from "styled-components"
import axios from "axios"


const InputTitle = styled.h2`
color: #335c67;
`
const CreateBut = styled.button`
margin-top:10px;
height: 30px;
width: 115px;
font-size: 15px;
border-radius: 10px;
background-color: #fff3b0;
display:inline;
&: hover {
  background-color: #e09f3e;
}
`
const AddPlaylist = styled.div`
display: grid;
justify-items: center;
`
//constantes reutilizáveis
const urlCreate = ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists")

const axiosAuth = {
    headers: {
        Authorization: "bianca-mendes-dumont"
    }
}


export default class CreatePlaylist extends React.Component{
  state = {
    namePlaylist: ""
  }


  //controlar input
  changeNamePlaylist = (event) => {
      this.setState({namePlaylist: event.target.value})
  }

  //criar playlist
  createPlaylist = () => {
      const body = {
          name: this.state.namePlaylist
      }

      axios.post (urlCreate, body,axiosAuth)
      .then(() => {
          alert(`Playlist ${this.state.namePlaylist} criada com sucesso!`)
          this.setState({namePlaylist: ""})
      }).catch(error => {
          alert("Erro ao criar playlist. Por favor, escolha outro nome.")
          console.log(error)
      })
  }

  render () {
    return (
      <AddPlaylist>
          <InputTitle>Digite o nome da Playlist</InputTitle>
        <input
        value = {this.state.namePlaylist}
        onChange = {this.changeNamePlaylist}
        />
        <CreateBut onClick = {this.createPlaylist}>Criar Playlist</CreateBut>
      </AddPlaylist>
      
    ) 
  }

}