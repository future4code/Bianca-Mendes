import {useState} from "react"
import {CardContainer, CardImage, CardText, DetailsButton, Title, ModalDetails, CloseButton, SignUpButton, ButtonContainer } from "./styles"
import Modal from "react-modal"
import {useHistory} from "react-router-dom"


const ShowCard = (props) => {
 const history =  useHistory()
 const [modalIsOpen, setModalIsOpen] = useState(false)
 const [id, setId] = useState("")

    const closeModal = () => {
        setModalIsOpen(false)
    }
    
    const goToFormPage = (id) => {
        history.push(`/alltrips/details/applicationform/${id}`)
    }
   
        return (
            <div>
            {modalIsOpen ? <Modal
             onRequestClose={closeModal}
             isOpen={modalIsOpen}
                                    style={{
                                        overlay: {
                                            backgroundColor: "#2a9d8f",
                                            width: '35vw',
                                            margin: 'auto',
                                            height: '380px',
                                            borderRadius: '10px'
                                        },
                                        content: {
                                            background: "#2a9d8f",
                                            overflow: "auto",
                                            WebkitOverflowScrolling: "touch",
                                            borderRadius: "4px",
                                            outline: "none",
                                            border: 'none',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                            color: "white",
                                            fontSize: '18px',
                                            fontWeight:'200',
                                        }
                                    }}
                                >
                                <Title>{props.name}</Title>
                                <ModalDetails>Descrição: {props.description}</ModalDetails>
                                <ModalDetails>Duração: {props.duration} dias</ModalDetails>
                                <ModalDetails>Planeta: {props.planet}</ModalDetails>
                                <ModalDetails>Data: {props.date}</ModalDetails>
                                <ButtonContainer>
                                <CloseButton onClick={() => setModalIsOpen(false)}>FECHAR</CloseButton>  
                                <SignUpButton onClick={ () => goToFormPage(props.id)}>INSCREVA-SE</SignUpButton>  
                                </ButtonContainer>
                                </Modal> : <>
                                
                                </> }
            
          

                 <CardContainer>
                     <CardImage>{props.image}</CardImage>
                     <CardText>{props.name}</CardText>
                     <DetailsButton onClick={() => {setModalIsOpen(true, setId)}}>DETALHES</DetailsButton>
                 </CardContainer>
            </div>
        )
}

export default ShowCard


