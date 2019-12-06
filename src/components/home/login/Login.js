import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.scss';
// import './Login.css';
import auth from '../../Auth';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      message: '',
      usuarios: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/usuarios')
      .then(data => {
        this.setState({ usuarios: data.data });
      })
      .catch(err => { throw new Error(err) });
  }

  onChangeHandler(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let usuarios = this.state.usuarios;

    // Caso encontre o usuário e senha fornecido irá fazer o login
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email === this.state.email && usuarios[i].senha === this.state.senha) {
        auth.login();
      }
    }

    // Caso não encontre nenhum usuário e senha igual ao fornecido irá mostrar a mensagem de erro
    this.setState({
      message: 'Login inválido'
    })
  }

  render() {
    // Redireciona para o "Extrato" assim que o usuário estiver autenticado
    if (auth.isAuthenticated()) {
      return <Redirect to={{
        pathname: '/banking',
        state: {
          email: this.state.email,
          senha: this.state.senha
        }
      }} />
    }

    return (
      <section className="login">
        <div className="login__line"></div>
        <div className="login__left-side">
          <div className="login__left-side--content">
            <div className="logo__internet-banking"></div>
            <form className="login__form">

              {this.state.message !== '' && <p className="login__message">{this.state.message}</p>}

              <label htmlFor="login" className="login__form--label">Login (e-mail)</label>
              <input autoComplete="off" type="text" id="login" className="login__form--input" name="email" value={this.state.email} onChange={(e) => this.onChangeHandler(e)} placeholder="viniciusbohreradamy@gmail.com" />
              <label htmlFor="senha" className="login__form--label">Senha</label>
              <input type="password" id="senha" className="login__form--input" name="senha" value={this.state.password} onChange={(e) => this.onChangeHandler(e)} placeholder="**********" />
              <button className="login__form--forgot-password" type="button">Esqueceu sua senha?</button>
              <button className="login__btn" type="submit" onClick={this.handleSubmit}>Entrar</button>
            </form>
          </div>
        </div>

        <div className="login__right-side">
          <p className="login__right-side--text">Administrar sua conta<br />nunca foi tão fácil</p>
        </div>
      </section>
    )
  }
}

export default Login;