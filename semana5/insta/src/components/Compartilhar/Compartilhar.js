import React, {Component} from 'react'
import './Compartilhar.css'

export class Compartilhar extends Component {
	state = {
		//compartilharInput: ""
	}
	/*
	onChangeCompartilhar = (event) => {
		this.setState({                   //pra fazer o input funcionar
			compartilharInput: event.target.value
		})
	}
*/
	render() {
		return <div className={'share-container'}>
			<button id={"Instagram"} onClick={this.props.aoCompartilharPost}>Instagram</button>
			<button id={"Facebook"} onClick={this.props.aoCompartilharPost}>Facebook</button>
			<button id={"Twitter"} onClick={this.props.aoCompartilharPost}>Twitter</button>
		</div>
	}
}

/*
<input
className={'input-compartilhar'}
value={this.state.compartilharInput}
onChange={this.onChangeCompartilhar}
/>
			*/