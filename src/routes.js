import React from 'react';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Nav from './Components/Nav/Nav';
import PostDetails from './Components/PostDetails/PostDetails';
import { Switch, Route } from 'react-router-dom';





export default (
    <Switch>
       <Route component={Auth} exact path="/" />
       <Route component={Dashboard} path="/Dashboard" />
       <Route component={Form} path="/new" />
       <Route component={PostDetails} path="/post/:id" />
       <Route component={Nav} path="/Dashboard/Nav" />
    </Switch>

)



