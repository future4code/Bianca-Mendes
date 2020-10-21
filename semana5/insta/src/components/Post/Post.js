import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

import iconeMarcacaoBranco from '../../img/bookmark_border.svg'
import iconeMarcacaoPreto from '../../img/bookmark.svg'
import { IconeMarcador } from '../Marcador/IconeMarcador'

import iconeCompartilhar from '../../img/share.svg'
import {Compartilhar} from '../Compartilhar/Compartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcador: false,
    compartilhar: false
  }

  onClickCurtida = () => {
    console.log('Curtiu!')

    this.setState({                    //pra pintar o coração quando clicar 
      curtido: !this.state.curtido
    })

    if (!this.state.curtido) {      //pra somar ou subtrair conforme a pessoa clica no coração
      this.setState ({ numeroCurtidas: this.state.numeroCurtidas + 1 }) 
    } else {
      this.setState ({ numeroCurtidas: this.state.numeroCurtidas - 1})
    }
    
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickMarcador = () => {
    this.setState({                    //pra pintar o marcador quando clicar
      marcador: !this.state.marcador
    })
  }


  onclickCompartilhar = () => {
    this.setState({
    compartilhar: !this.state.compartilhar
    })
  }

  aoCompartilharPost = (event) => {
    console.log(`Post compartilhado no ${event.target.id}`)
}
 

  render() {

    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeMarcacao   //adicionando variavel do icone de marcação

    if(this.state.marcador) {
      iconeMarcacao = iconeMarcacaoPreto
    } else {
      iconeMarcacao = iconeMarcacaoBranco
    }

    let componenteCompartilhar 

    if(this.state.compartilhar) {
      componenteCompartilhar = <Compartilhar aoCompartilhar={this.aoCompartilharPost}/>
    }
   

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeMarcador    //funcionalidade do icone marcação
          icone={iconeMarcacao}
          onClickIcone={this.onClickMarcador}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onclickCompartilhar}
        />


      </div>
      {componenteComentario}
      {componenteCompartilhar }
    </div>
  }
}

 export default Post