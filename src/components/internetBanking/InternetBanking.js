import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './InternetBanking.scss';

import Navbar from './navbar/Navbar';
import Sidenav from './sidenav/Sidenav';
import Infos from './infos/Infos';
import Cashflow from './cashflow/Cashflow';

class InternetBanking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      mainPage: 'Home',
      sideBarActive: 'Consultar saldo'
    }
  }

  componentDidMount = () => {
    const { email, senha } = this.props.location.state;

    axios.get('http://localhost:3001/usuarios')
      .then(res => {
        for(let i = 0; i < res.data.length; i++) {
          if(res.data[i].email === email && res.data[i].senha === senha) {
            this.setState({
              userData: res.data[i]
            })
          }
        }
      })
      .catch(err => { throw new Error(err)});
  }

  updatePage = (mainPage) => {
    this.setState({ mainPage: mainPage });
  }

  updateSideBar = (item) => {
    this.setState({ sideBarActive: item });
  }

  render() {
    return (
      <div className="internet-banking">
        <Navbar state={this.state} updatePage={this.updatePage} />
        <div className="internetBanking-content">
          <Sidenav state={this.state} updateSideBar={this.updateSideBar} />
          <div className="content-container">
            <Infos state={this.state} />
            <Cashflow />
          </div>
        </div>
      </div>
      
    )
  }
}

export default InternetBanking;