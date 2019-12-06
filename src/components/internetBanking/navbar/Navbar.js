import React from 'react';
import './Navbar.scss'

const Navbar = ({state: { userData, mainPage }, updatePage}) => {
  let buttonsArr = ['Home', 'Cobrar', 'Gestão', 'Pagar', 'Cartões'];

  const displayBtns = (arr) => {
    return (
      arr.map((item, idx) => {
        if (item === mainPage) {
          return <button key={idx} style={{color: '#62BD07'}}>
            <div className="active__top-bar"></div>
            {item}
          </button>;
        } else {
          return <button key={idx} onClick={() => updatePage(item)}>{item}</button>
        }
      })
    )
  }

  return (
    <nav className="navbar">
      <div className="navbar__left-side">
        <img src="/images/svg/contaSimples_logo.svg" alt="Logo conta simples"/>
        <div className="navbar__spacer"></div>
        <div className="navbar__left-side--container">
          {displayBtns(buttonsArr)}
        </div>
      </div>
      <div className="navbar__right-side">
        <div className="navbar__spacer"></div>
        <div className="navbar__notification-container">
          <img src="/images/svg/notification.svg" alt="Notificação" className="navbar__notification-img"/>
          <div className="navbar__notification-number"><span>{userData.notificações}</span></div>
        </div>
        <div className="navbar__spacer"></div>
        <img src={userData.avatarUrl} alt="User" className="navbar__profile--avatar"/>
        <div className="navbar__profile-infos">
          <p className="navbar__profile--name">{userData.nome}</p>
          <p className="navbar__profile--details">Conta <span>{userData.conta}</span>  Agência <span>{userData.agencia}</span></p>
        </div>
        <img src="/images/svg/down_arrow.svg" alt="Menu" className="navbar__profile--down-arrow"/>
      </div>
    </nav>
  )
}

export default Navbar;