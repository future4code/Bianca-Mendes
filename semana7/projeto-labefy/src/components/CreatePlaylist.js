import React from "react"
import styled from "styled-components"
import axios from "axios"

export default class CreatePlaylist extends React.Component{
  state = {
    namePlaylist: ""
  }

  
  changeNamePlaylist = (event) => {
      this.setState({namePlaylist: event.target.value})
  }

  createPlaylist = () => {

      const urlCreate = ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists")

      const axiosAuth = {
          headers: {
              Authorization: "bianca-mendes-dumont"
          }
      }
      const body = {
          name: this.state.namePlaylist
      }

      axios.post (urlCreate, body,axiosAuth)
      .then(() => {
          alert(`Playlist ${this.state.namePlaylist} criada com sucesso!`)
          this.setState({namePlaylist: ""})
      }).catch(error => {
          alert("Erro ao criar playlist")
          console.log(error)
      })
  }
  render () {

    return (
      <div>
          <h2>Digite o nome da Playlist</h2>
        <input
        value = {this.state.namePlaylist}
        onChange = {this.changeNamePlaylist}
        />
        <button onClick = {this.createPlaylist}>Criar Playlist</button>
      </div>
      
    )//fechamento return 
  }//fechamento render

}//fechamento class