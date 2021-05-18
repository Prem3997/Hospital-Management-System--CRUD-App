import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePageComponent } from './Components/HomePageComponent/HomePageComponent'
import LoginComponent from './Components/LoginComponent/LoginComponent'
import { DoctorTableComponent } from './Components/TableComponent/DoctorTableComponent'

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePageComponent}></Route>
                <Route exact path='/Home' component={HomePageComponent}></Route>
                <Route exact path='/Login' component={LoginComponent}></Route>
                <Route exact path='/DoctorDetails' component={DoctorTableComponent}></Route>
            </Switch>
        </div>
    )
}
