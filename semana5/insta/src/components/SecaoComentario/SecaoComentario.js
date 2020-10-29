import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		comentarioInput: ""
	}


	onChangeComentario = (event) => {
		this.setState({                   //pra fazer o input funcionar
			comentarioInput: event.target.value
		})
		console.log(event.target.value) //apenas pra verificar se ta salvando o comentário
	}


	
	render() {

		
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentarioInput}
				onChange={this.onChangeComentario}
				
			/>

			<button onClick={() => {this.props.aoEnviar(this.state.comentarioInput)}}>Enviar</button>
			</div>
	}
}
