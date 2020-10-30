import React from "react"
import styled from "styled-components"
import CreatePlaylist from "./components/CreatePlaylist"
import Playlists from "./components/Playlists"

export default class App extends React.Component{
  state = {
    page: ""
  }

  // pra funcionar o botão
  changePage = (event) => {
    this.setState({page: event.target.value})
  }

  //pra trocar entre as páginas
  choosePage = () => {
    if(this.state.page === "createPlaylist") {
      return <CreatePlaylist/>
    } else {
      return <Playlists/>
    }
  }

  render () {

    return (
      <div>
        <h1>LABEFY</h1>
        <button value="createPlaylist" onClick = {this.changePage}>Criar Playlist</button>
        <button value="mySongs" onClick = {this.changePage}>Minhas Playlists</button>
        <div>{this.choosePage()}</div>
      </div>
      
    )//fechamento return 
  }//fechamento render

}//fechamento class

