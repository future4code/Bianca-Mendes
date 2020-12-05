import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import CommentItem from "../../components/PostCard/Comment/Comment"
import axios from "axios"
import PostItem from "../../components/PostCard/PostItem/PostItem"
import { urlBase } from "../../constants/urlBase"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useForm } from "../../hooks/useForm"
import { TextField, Button } from "@material-ui/core"
import { CreateCommentContainer, FormContainer } from "./styled"


const PostPage = () => {
    useProtectedPage()
    const[detail, setDetail] = useState({})
    const pathParams = useParams()
    const {form, onChange, resetState} = useForm({text: ""})

    useEffect(() => {
        getDetails()
      }, [])

    const handleInput = (event) => {
        const {value, name} = event.target
        onChange(value, name)
    }  

    const getDetails = () => {
        axios.get(`${urlBase}/posts/${pathParams.id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setDetail(res.data.post)
        }).catch((err) => {
            console.log(err)
        })
    }
    
    const createComment = (event) => {
        event.preventDefault()

        const body = {
            text: form.text
        }

        axios.post(`${urlBase}/posts/${pathParams.id}/comment`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                resetState()
                getDetails()
                alert("certo")
            }).catch((err) => {console.log(err)})
    }

      return(
        <div>
            <PostItem
            id={detail.id}
            username={detail.username}
            title={detail.title}
            text={detail.text}     
            votes={detail.votesCount}
            comments={detail.commentsCount}
            voteDirection={detail.userVoteDirection}
            update={getDetails}
            />

            <CreateCommentContainer>
            <FormContainer onSubmit={createComment}>
             <TextField
             value={form.text}
             variant="outlined"
             size="small"
             type="text"
             name="text"
             placeholder="Comentário"
             onChange={handleInput}
             multiline
             required/>
             <Button type="submit" variant="contained" color="primary">POSTAR</Button>
            </FormContainer>
            </CreateCommentContainer>

           {detail.comments && detail.comments.map((item) => {
                return(
                    <div key={item.id}>
                    <CommentItem
                    idComment={item.id}
                    username={item.username}
                    text={item.text}
                    votes={item.votesCount}
                    voteDirection={item.userVoteDirection}
                    idPost={pathParams.id}
                    update={getDetails}
                    />
                    </div>
                )
            })}     

            
        </div>

        
    )
}

export default PostPage