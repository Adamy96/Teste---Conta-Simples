import React, { Component } from 'react';
import axios from 'axios';

class InternetBanking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {}
    }
  }

  componentDidMount() {
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
        console.log(this.state.userData);
      })
      .catch(err => { throw new Error(err)});
  }

  render() {
    return (
      <h1>Internet Banking</h1>
    )
  }
}

export default InternetBanking;