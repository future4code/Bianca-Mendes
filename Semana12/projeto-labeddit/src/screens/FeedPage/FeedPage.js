import React from "react"
import { useForm } from "../../hooks/useForm"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { urlBase } from "./../../constants/urlBase"
import PostCard from "../../components/PostCard/PostCard"
import { useRequestData } from "../../hooks/useRequestData"
import { TextField, Button } from "@material-ui/core"
import { FormContainer, CreatePostContainer } from "./styled"
import { createPost } from "../../services/post"
import CircularProgress from '@material-ui/core/CircularProgress'

const FeedPage = () => {
    useProtectedPage()
    const {form, onChange, resetState} = useForm({title: "", text: ""})
    
    const handleInput = (event) => {
        const {value, name} = event.target
        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        resetState()
        getFunction()
        createPost(form)
    }
  
    const [getPosts, getFunction] = useRequestData(`${urlBase}/posts`, undefined)

    return (
        <div>
           
            <CreatePostContainer>
            <FormContainer onSubmit={ handleSubmission}>
            <TextField
            value={form.title}
            name="title"
            variant="outlined"
            size="small"
            type="text"
            placeholder="Título"
            onChange={handleInput}
            required/>
            <TextField
            value={form.text}
            name="text"
            variant="outlined"
            size="small"
            type="text"
            placeholder="No que você esta pensando?"
            onChange={handleInput}
            multiline
            required/>
            <Button type="submit" variant="contained" color="primary" >POSTAR</Button>
            </FormContainer>
            </CreatePostContainer>
            <br/>

        {!getPosts ?<CircularProgress/> : 
          getPosts.posts.map((item) => {
            return (
                <div key={item.id}>
                    <PostCard
                    id={item.id}
                    username={item.username}
                    title={item.title}
                    text={item.text}
                    comments= {item.commentsCount}
                    votes= {item.votesCount}
                    update={getFunction}
                    voteDirection={item.userVoteDirection}
                    />
                </div> 
            )
        })}

        </div>
    )
}

export default FeedPage