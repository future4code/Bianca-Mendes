import React from "react"
import styled from "styled-components"
import CreatePlaylist from "./components/CreatePlaylist"
import Playlists from "./components/Playlists"


const AppContainer = styled.div`
max-width:100vw;
height:100vh;
display:grid;
background-color: white;
`
const Title = styled.h1`
color: #335c67;
justify-self: center;
font-size: 50px;
`
const CreateButton = styled.button`
margin: 10px;
height: 30px;
width: 180px;
font-size:20px;
justify-self: center;
border-radius: 10px;
background-color: #fff3b0;
&: hover {
  background-color: #e09f3e;
}
`
const MySongsButton = styled.button`
margin: 10px;
height: 30px;
width: 180px;
font-size: 20px;
justify-self: center;
border-radius: 10px;
background-color: #fff3b0;
&: hover {
  background-color: #e09f3e;
}
`

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
    } else if (this.state.page === "mySongs") {
      return <Playlists/>
    }
  }

  render () {

    return (
      <AppContainer>
        <Title>LABEFY</Title>
        <CreateButton value="createPlaylist" onClick = {this.changePage}>Criar Playlist</CreateButton>
        <MySongsButton value="mySongs" onClick = {this.changePage}>Minhas Playlists</MySongsButton>
        <div>{this.choosePage()}</div>
      </AppContainer>
      
    ) 
  }

}

