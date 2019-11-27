import React, { Fragment, Component } from 'react';
import Login from './login/Login';
import About from './about/About';
import Signup from './signup/Signup';

class Home extends Component {
  render() {
    return (
      <Fragment>
       <Login/>
       <About/>
       <Signup/>
     </Fragment>
    )
  }
}

export default Home;