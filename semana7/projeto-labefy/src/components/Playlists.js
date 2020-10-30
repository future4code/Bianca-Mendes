import React from "react"
import styled from "styled-components"
import axios from "axios"
import Details from "./Details"



const urlBase= ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists")


const axiosAuth = {
    headers: {
        Authorization: "bianca-mendes-dumont"
        }
}

export default class Playlists extends React.Component{
  state = {
    userPlaylist: [],
    currentPage: "userPlaylist"
  }

  componentDidMount() {
      this.fetchUserPlaylists()
  }

  fetchUserPlaylists = () => {
      axios.get(urlBase, axiosAuth)
     .then((response) => {
         console.log("testando", response)
        this.setState({userPlaylist:response.data.result.list})
     })
 }

  deletePlaylist = (playlistId) => {
       axios.delete(`${urlBase}/${playlistId}`, axiosAuth)
       .then(() => {
           alert("Playlist excluida!")
           this.fetchUserPlaylists()
       })
    }

  seePage = () => {
        if(this.state.currentPage === "userPlaylist") {
          return <Playlists/>
        } else {
          return <Details/>
        }
      }

   
  render () {
        
      //console.log(this.state.userPlaylist,"outro teste")
    const renderList = this.state.userPlaylist.map((list) => {
        return <p key={list.id}>
            {list.name}
            <button onClick={() => this.deletePlaylist(list.id)}>X</button>
            <button value="listDetails" onClick={this.seePage}>Detalhes</button>
            </p>
    })

    return (
      <div>
       {renderList}
      
      </div>
      
    )//fechamento return 
  }//fechamento render

}//fechamento class