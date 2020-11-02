import React from "react"
import styled from "styled-components"
import axios from "axios"
import AddMusic from "./AddMusic"

const PlaylistName = styled.h3`
color: #335c67;
justify-self: center;
`
const Musicbox = styled.div`
justify-self: center;
display: grid;
`
const BackBut = styled.button`
margin-top: 10px;
width: 210px;
justify-self: center;
border-radius: 10px;
background-color: #fff3b0;
&: hover {
  background-color: #e09f3e;
}
` 
const Div = styled.div`
justify-self: center;
display: grid;
`
const P = styled.p`
justify-self: center;
display: grid;
`

export default class Details extends React.Component{
    render () {
      const renderDetails = this.props.tracksList.map((track) => {
        return <Div key={track.id}>
          <p>Música: {track.name}</p>
          <p>Artista: {track.artist}</p>

          <audio src={track.url} controls/>

        </Div>
      })
          return (
      <Musicbox>
          <PlaylistName>Nome playlist:</PlaylistName>
          <P>{this.props.namePlaylist}</P>

          {renderDetails}

          <AddMusic playlistId={this.props.playlistId} playlistTracks={this.props.playlistTracks}/>
         <BackBut onClick= {this.props.backPage}>Voltar para Playlists</BackBut>
      </Musicbox>
      
    ) 
  }

}