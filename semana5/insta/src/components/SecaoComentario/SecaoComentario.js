import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		comentarios: [],
		comentarioInput: ""
	}

adicionarComentario = () => {
	const NovoComentario = this.state.comentarioInput

	const Ncoment = [NovoComentario, ...this.state.comentarios]

	this.stateSet ({comentarios: Ncoment})
	this.setState({comentarioInput:""})
}
	
	
	onChangeComentario = (event) => {
		this.setState({                   //pra fazer o input funcionar
			comentarioInput: event.target.value
		})
		console.log(event.target.value) //apenas pra verificar se ta salvando o comentário
	}


	onClickComentario = (event) => {
		this.setState({                   
			comentarios: event.target.value
		})
	}

	render() {

		const Comentarios = this.state.comentarios.map((comentario) => {
			return {comentario}
		 })
		
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentarioInput}
				onChange={this.onChangeComentario}
				
			/>

			<button onClick={this.props.aoEnviar || Comentarios}>Enviar</button>
			<div>{Comentarios}</div>
		</div>
	}
}
