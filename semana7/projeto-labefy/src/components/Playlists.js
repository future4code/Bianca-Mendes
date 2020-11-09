import React from "react"
import styled from "styled-components"
import axios from "axios"
import Details from "./Details"


const DelButton = styled.button`
margin-left: 20px;
height: 30px;
width: 70px;
font-size: 15px;
border-radius: 10px;
background-color: #fff3b0;
&: hover {
  background-color: #e09f3e;
}
`
const P = styled.li`
cursor: pointer;
text-align: justify;
list-style-type:none;
font-size: 20px;
`
const PlaylistDiv = styled.div` 
display: grid;
justify-content: center;
margin: 5px;
`
//constantes reutilizáveis
const urlBase= ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists")

const axiosAuth = {
    headers: {
        Authorization: "bianca-mendes-dumont"
        }
}

export default class Playlists extends React.Component{
  state = {
    userPlaylist: [],
    seeDet: false,
    tracksList:[],
    namePlaylist: "",
    playlistId: "", //pra puxar os detalhes 
    
  }

//montar todas as infos e atualizações na pagina
  componentDidMount() {
      this.fetchUserPlaylists()
}

//puxar todas as playlists
  fetchUserPlaylists = () => {
      axios.get(urlBase, axiosAuth)
     .then((response) => {
         //console.log("testando", response)
        this.setState({userPlaylist:response.data.result.list})
     })
}

//deletar playlist
  deletePlaylist = (id) => {
    if(window.confirm(`Tem certeza que deseja deletar essa playlist?`)) {
       axios.delete(`${urlBase}/${id}`, axiosAuth)
       .then(() => {
           alert("Playlist excluida!")
           this.fetchUserPlaylists()
       })
    }}

//mostrar detalhes playlist    
  seeDetails = () => {
      this.setState({seeDet: true})
    }

//puxar as musicas das playlists    
  playlistTracks = (playlistId, name) => {
       this.seeDetails()
       console.log(this.playlistTracks, "musicas")
      axios.get (`${urlBase}/${playlistId}/tracks`,axiosAuth)
       .then((response) => {
        this.setState({
              namePlaylist: name,
              tracksList: response.data.result.tracks,
              playlistId: playlistId     //pra puxar os detalhes depois            
            })
            //console.log(response.data.result.tracks, "teste teste")
            //console.log(this.state.namePlaylist, "hey test")
      }).catch(error => {
          console.log(error)
      })
   }

  
  render () {
        
      //console.log(this.state.userPlaylist,"outro teste")
    const renderList = this.state.userPlaylist.map((list) => {
        return <PlaylistDiv key={list.id}>
            
            
            <P onClick={() => this.playlistTracks(list.id, list.name)}>
              {list.name}
              <DelButton onClick={() => this.deletePlaylist(list.id)}>Excluir</DelButton>
              </P>
            
            </PlaylistDiv>
    })

    return (
      <div>
       {renderList}
       {this.state.seeDet ?  
        <Details
        backPage={this.seeDetails}
        tracksList={this.state.tracksList}
        namePlaylist={this.state.namePlaylist}
        playlistId={this.state.playlistId}
        />      
        : <></>}
      </div>
      
    )
  }

}

