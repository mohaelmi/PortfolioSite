import React, { Component }  from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content  } from 'react-mdl';
import Routerr from './components/router';

import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Routerr/>
        </Content>
    </Layout>
  </div>
  );
  }
}

export default App;
