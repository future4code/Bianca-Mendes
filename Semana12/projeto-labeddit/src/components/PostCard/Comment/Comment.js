import React from "react"
import axios from "axios"
import {CommentContainer, CommentHeader, PostFooter, ArrowImage } from "./styled"
import arrowup from "../../../assets/arrowup.svg"
import arrowupgreen from "../../../assets/arrowupgreen.svg"
import arrowdown from "../../../assets/arrowdown.svg"
import arrowdownred from "../../../assets/arrowdownred.svg"
import { urlBase } from "../../../constants/urlBase"

const CommentItem = (props) => {
     
    
    const vote = (rate) => {
        console.log(props.idComment, "aqui")
        const body = {
            direction: rate
        }
        axios.put(`${urlBase}/posts/${props.idPost}/comment/${props.idComment}/vote`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            props.update()
            console.log(res, "funcionando") 

        }).catch((err) => {
            console.log(err)
            alert("Erro, tente novamente.")
        })
    }

    const liked = () => {
        if (props.voteDirection === 0) {
            return (
                <>
                    <ArrowImage src={arrowup} alt={"seta-cima"} onClick={() => { vote(1) }} />
                    <div>{props.votes}</div>
                    <ArrowImage src={arrowdown} alt={"seta-baixo"} onClick={() => { vote(-1) }} />
                </>
            )
        } else if (props.voteDirection === 1) {
            return (
                <>
                    <ArrowImage src={arrowupgreen} alt={"seta-cima"} onClick={() => { vote(0) }} />
                    <div>{props.votes}</div>
                    <ArrowImage src={arrowdown} alt={"seta-baixo"} onClick={() => { vote(-1) }} />
                </>
            )
        } else {
            return (
                <>
                    <ArrowImage src={arrowup} alt={"seta-cima"} onClick={() => { vote(1) }} />
                    <div>{props.votes}</div>
                    <ArrowImage src={arrowdownred} alt={"seta-baixo"} onClick={() => { vote(0) }} />
                </>
            )
           }} 


    return(
        <CommentContainer>
            <CommentHeader>{props.username}</CommentHeader>
            <p>{props.text}</p>
            <PostFooter>
                {liked()}
            </PostFooter>
        </CommentContainer>

    )
}

export default CommentItem