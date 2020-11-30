import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import LoginPage from "./../screens/LoginPage/LoginPage"
import FeedPage from "./../screens/FeedPage/FeedPage"
import PostPage from "./../screens/PostPage/PostPage"
import RegistrationPage from "./../screens/RegistrationPage/RegistrationPage"


export default function Router () {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= "/">
                   <LoginPage/> 
                </Route>
                <Route exact path="/feed">
                    <FeedPage/>
                </Route>
                <Route exact path="/post/:id">
                    <PostPage/>
                </Route>
                <Route exact path="/signUp">
                    <RegistrationPage/>
                </Route>
                <Route>
                    <div>Página não encontrada</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}