import React, {Component} from 'react'
import './Compartilhar.css'

export class Compartilhar extends Component {
	state = {
		comentario: ""
	}

	onclickCompartilhar = () => {
		this.setState({
		compartilhar: !this.state.compartilhar
		})
	  }
	
	  aoCompartilharPost = (event) => {
		console.log(`Post compartilhado no ${event.target.id} com a mensagem ${this.state.comentario}`)
		this.setState({comentario: ""})
	}


	
	onChangeComentario = (event) => {
		this.setState({                   //pra fazer o input funcionar
			comentario: event.target.value
		})
	}

	

	render() {
		return <div className={'share-container'}>

			<input
			className={'comentario'}
			value={this.state.comentario}
			onChange={this.onChangeComentario}
			/>
			<button id={"Instagram"} onClick={this.aoCompartilharPost}>Instagram</button>
			<button id={"Facebook"} onClick={this.aoCompartilharPost}>Facebook</button>
			<button id={"Twitter"} onClick={this.aoCompartilharPost}>Twitter</button>
		</div>
	}
}



	/*
	
*/		