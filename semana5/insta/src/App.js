import React from 'react'
import './App.css'
import Post from './components/Post/Post'
import styled from "styled-components"


class App extends React.Component {
  state = {

    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50/?a=1",
        fotoPost: "https://picsum.photos/200/150/?a=1"
      },

      {
      nomeUsuario:"lais",
      fotoUsuario: "https://picsum.photos/50/50/?a=2",
      fotoPost: "https://picsum.photos/200/150/?a=2"
      },

      {
        nomeUsuario: "caio",
        fotoUsuario: "https://picsum.photos/50/50/?a=3",
        fotoPost: "https://picsum.photos/200/150/?a=3"
      }

    ],

    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
  }
  

  adicionarPost = () => {

    const NovoPost= {
      nomeUsuario: this.state.inputNomeUsuario,

      fotoUsuario: this.state.inputFotoUsuario,

      fotoPost: this.state.inputFotoPost
    }

    const NovosPosts= [NovoPost, ...this.state.posts]

    this.setState({posts: NovosPosts})
  }

  onChangeInputusuario = (event) => {
    this.setState({inputNomeUsuario: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({inputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({inputFotoPost: event.target.value})
  }


  render() {

    const listaComponentesPost = this.state.posts.map((post) => {
      return (
        <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        />
      )

      })

      return (
        <div>
          <input          //para inserir input nome usuario
            value= {this.state.inputNomeUsuario}
            onChange= {this.onChangeInputusuario}
            placeholder= {"Nome Usuário"}
          />

          <input
            value= {this.state.inputFotoUsuario}
            onChange= {this.onChangeInputFotoUsuario}
            placeholder= {"Foto Usuário"} 
          />

          <input
            value= {this.state.inputFotoPost}
            onChange= {this.onChangeInputFotoPost}
            placeholder= {"Foto Post"}  
          />
        <button onClick={this.adicionarPost}>Adicionar</button>
        <div>{listaComponentesPost}</div>
        </div>
        
        
      )
  
  }
}
      export default App
      
        
    




