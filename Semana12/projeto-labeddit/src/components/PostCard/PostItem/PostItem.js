import React from "react"
import axios from "axios"
import arrowup from "../../../assets/arrowup.svg"
import arrowupgreen from "../../../assets/arrowupgreen.svg"
import arrowdown from "../../../assets/arrowdown.svg"
import arrowdownred from "../../../assets/arrowdownred.svg"
import {PostDetailContainer, PostHeader, PostDetailFooter, CommentImage, ArrowImage } from "./styled"
import comments from "../../../assets/comments.svg"
import { urlBase } from "../../../constants/urlBase"


const PostItem = (props) => {

    const vote = (rate) => {
        const body = {
            direction: rate

        }
        axios.put(`${urlBase}/posts/${props.id}/vote`, body, {
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
        <PostDetailContainer>
            <PostHeader>{props.username}</PostHeader> 
            <p>{props.title}</p>
            <p>{props.text}</p>
            <PostDetailFooter>
            {liked()}
            <CommentImage src={comments} alt={"balão-comentario"}/>
            <div>{props.comments}</div>
            </PostDetailFooter>
        </PostDetailContainer>

    )
}

export default PostItem