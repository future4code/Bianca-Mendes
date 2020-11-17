import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from "../screens/HomePage/HomePage"
import AllTripsPage from "../screens/AllTripsPage/AllTripsPage"
import FormPage from "../screens/FormPage/FormPage"
import LoginPage from "../screens/LoginPage/LoginPage"
import TripsManagerHomePage from "../screens/TripsManagerHomePage/TripsManagerHomePage"
import CreateTripPage from "../screens/CreateTripPage/CreateTripPage"
import TripAnalytcsPage from "../screens/TripsAnalytcsPage/TripsAnalyctsPage"
import Footer from "../components/Footer/Footer"

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                    <Footer/>
                </Route>
                <Route exact path="/alltrips">
                    <AllTripsPage/>
                    <Footer/>
                </Route>
                <Route exact path="/alltrips/applicationform">
                    <FormPage/>
                    <Footer/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/managerarea">
                    <TripsManagerHomePage/>
                </Route>
                <Route exact path="/managerarea/create">
                    <CreateTripPage/>
                </Route>
                <Route exact path="/managerarea/analytcs">
                    <TripAnalytcsPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

