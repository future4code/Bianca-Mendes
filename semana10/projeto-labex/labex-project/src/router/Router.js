import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from "../screens/HomePage/HomePage"
import AllTripsPage from "../screens/AllTripsPage/AllTripsPage"
import FormPage from "../screens/FormPage/FormPage"
import LoginPage from "../screens/LoginPage/LoginPage"
import TripsManagerHomePage from "../screens/TripsManagerHomePage/TripsManagerHomePage"
import CreateTripPage from "../screens/CreateTripPage/CreateTripPage"
import Footer from "../components/Footer/Footer"
import TripsAnalyticsPage from "../screens/TripsAnalyticsPage/TripsAnalyticsPage"

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
                <Route exact path="/alltrips/details/applicationform/:id">
                    <FormPage/>
                    <Footer/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                    <Footer/>
                </Route>
                <Route exact path="/managerarea">
                    <TripsManagerHomePage/>
                    
                </Route>
                <Route exact path="/managerarea/create">
                    <CreateTripPage/>
                    <Footer/>
                </Route>
                <Route exact path="/managerarea/analytics/:id">
                    <TripsAnalyticsPage/>
                    <Footer/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

