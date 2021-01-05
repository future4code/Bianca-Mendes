import React from "react"
import styled from "styled-components"
import axios from "axios"


const AddSong = styled.div`
display: grid;
`
const InfosMusic = styled.input`
width: 200px;
justify-self: center;
margin-bottom:8px;
`
const TitleInfos = styled.h3`
color: #335c67;
justify-self: center;
`
const AddBut = styled.button `
width: 210px;
justify-self: center;
border-radius: 10px;
background-color: #fff3b0;
&: hover {
  background-color: #e09f3e;
}
`
//constantes reutilizáveis
const urlBase= ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists")

const axiosAuth = {
    headers: {
        Authorization: "bianca-mendes-dumont"
        }
}


export default class AddMusic extends React.Component{
  state = {
    nameMusic: "",
    nameArtist: "",
    urlLink:""
  }

//controlar inputs
  changeNameMusic = (event) => {
      this.setState({nameMusic: event.target.value})
}

  changeNameArtist = (event) => {
    this.setState({nameArtist: event.target.value})
}

  changeUrlLink = (event) => {
    this.setState({urlLink: event.target.value})
}


//adicionar músicas
  addTrack = (playlistId) => {
      const body = {
          name: this.state.nameMusic,
          artist:this.state.nameArtist,
          url: this.state.urlLink
      }
      console.log(this.addTrack, "testando teste")
      axios.post (`${urlBase}/${playlistId}/tracks`, body, axiosAuth)
      .then(() => {
          alert(`Musica ${this.state.nameMusic} adicionada com sucesso!`)
          this.setState({nameMusic: "", nameArtist: "", urlLink: ""})
          //this.props.playlistTracks()
          
      }).catch(error => {
          alert("Erro ao adicionar música")
          console.log(error)
      })
  }
  render () {

    return (
      <AddSong>
          <TitleInfos>Digite as informações da sua nova música</TitleInfos>
        <InfosMusic
        placeholder= "Nome da música"
        value = {this.state.nameMusic}
        onChange = {this.changeNameMusic}
        />
        <InfosMusic
        placeholder= "Digite o nome do artista"
        value = {this.state.nameArtist}
        onChange = {this.changeNameArtist}
        />
        <InfosMusic
        placeholder= "Adicione o link da música"
        value = {this.state.urlLink}
        onChange = {this.changeUrlLink}
        />
        <AddBut onClick = {() => this.addTrack(this.props.playlistId)}>Adicionar</AddBut>
      </AddSong>
      
    ) 
  }

}