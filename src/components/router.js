import React from 'react';
import { Switch , Route } from 'react-router-dom'
import Home from './home';
import Aboutme from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects'; 

const Routerr = () => (
    <Switch>
        <Route exact path="/"  component ={Home} />
        <Route path="/aboutme" component ={Aboutme} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
    </Switch>

);

export default Routerr