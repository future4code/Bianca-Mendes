import React from "react"
import styled from "styled-components"
import axios from "axios"




const urlPlaylistDetails= ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks")

const axiosAuth = {
    headers: {
        Authorization: "bianca-mendes-dumont"
        }
}


export default class Details extends React.Component{
  state = {
    playlistDetail: {},
    }

    componentDidMount () {
        this.playDetails()
    }

    playDetails = () => {
       axios.get (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,axiosAuth)
      .then((response) => {
          this.setState({playlistDetail:response.data.result.list})
      }).catch(error => {
          console.log(error)
      })
  }

    render () {


    return (
      <div>
         <button>Voltar para Playlists</button>
      </div>
      
    )//fechamento return 
  }//fechamento render

}//fechamento class