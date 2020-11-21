import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from "../screens/HomePage/HomePage"
import AllTripsPage from "../screens/AllTripsPage/AllTripsPage"
import FormPage from "../screens/FormPage/FormPage"
import LoginPage from "../screens/LoginPage/LoginPage"
import TripsManagerHomePage from "../screens/TripsManagerHomePage/TripsManagerHomePage"
import CreateTripPage from "../screens/CreateTripPage/CreateTripPage"
import FooterPublic from "../components/FooterPublic/FooterPublic"
import TripsAnalyticsPage from "../screens/TripsAnalyticsPage/TripsAnalyticsPage"

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                    <FooterPublic/>
                </Route>
                <Route exact path="/alltrips">
                    <AllTripsPage/>
                    <FooterPublic/>
                </Route>
                <Route exact path="/alltrips/details/applicationform/:id">
                    <FormPage/>
                    <FooterPublic/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                    <FooterPublic/>
                </Route>
                <Route exact path="/managerarea">
                    <TripsManagerHomePage/>
                    
                </Route>
                <Route exact path="/managerarea/create">
                    <CreateTripPage/>
                    <FooterPublic/>
                </Route>
                <Route exact path="/managerarea/analytics/:id">
                    <TripsAnalyticsPage/>
                    <FooterPublic/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

