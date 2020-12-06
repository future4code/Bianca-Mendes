import React from "react"
import { goToDetails } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import { PostContainer, PostHeader, PostFooter, Title, DetailContainer, CommentImage, ArrowImage } from "./styled"
import axios from "axios"
import { urlBase } from "../../constants/urlBase"
import comments from "../../assets/comments.svg"
import arrowup from "../../assets/arrowup.svg"
import arrowupgreen from "../../assets/arrowupgreen.svg"
import arrowdown from "../../assets/arrowdown.svg"
import arrowdownred from "../../assets/arrowdownred.svg"


const PostCard = (props) => {
    const history = useHistory()

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

    return (
        <PostContainer>
            <PostHeader>{props.username}</PostHeader>
            <DetailContainer onClick={() => { goToDetails(history, props.id) }}>
                <Title>{props.title}</Title>
                <p>{props.text}</p>
            </DetailContainer>
            <PostFooter>
                {liked()}
                <CommentImage src={comments} alt={"balão-comentario"} onClick={() => { goToDetails(history, props.id) }} />
                <div>{props.comments}</div>
            </PostFooter>
        </PostContainer>

    )
}

export default PostCard