import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from "../screens/HomePage/HomePage"
import AllTripsPage from "../screens/AllTripsPage/AllTripsPage"
import FormPage from "../screens/FormPage/FormPage"
import LoginPage from "../screens/LoginPage/LoginPage"
import TripsManagerHomePage from "../screens/TripsManagerHomePage/TripsManagerHomePage"
import CreateTripPage from "../screens/CreateTripPage/CreateTripPage"
import TripsAnalyticsPage from "../screens/TripsAnalyticsPage/TripsAnalyticsPage"

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/alltrips">
                    <AllTripsPage/>
                </Route>
                <Route exact path="/alltrips/details/applicationform/:id">
                    <FormPage/>
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
                <Route exact path="/managerarea/analytics/:id">
                    <TripsAnalyticsPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

