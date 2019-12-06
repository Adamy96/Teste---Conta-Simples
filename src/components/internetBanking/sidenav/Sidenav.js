import React, { Fragment } from 'react';
import './Sidenav.scss';

// Helper function
const displayList = (arr, sideBarActive, updateSideBar) => {
  // item[0] = img.src
  // item[1] = nome
  // item[2] = modificador, no caso "novo"

  return (
    arr.map((item, idx) => {
      if (item[1] === sideBarActive) {
        item[0] = item[0].replace('grey', 'green');
      }
      return (
        <li key={idx} onClick={()=> updateSideBar(item[1])}>
          {item[1] === sideBarActive && <div className="sidenav__active-bg"></div>}
          <img src={item[0]} alt="icon"/>
          <p>{item[1]}</p>
          {item[2] && <span>{item[2]}</span>}
        </li>
      )
    })
  )
}

const Sidenav = ({state: {sideBarActive}, updateSideBar}) => {
  let listArr1 = [
    ['/images/home_grey.png', 'Consultar saldo'],
    ['/images/file_grey.png', 'Extrato da conta'],
    ['/images/card_grey.png', 'Cartões', 'NOVO'],
    ['/images/money_grey.png', 'Emitir cobrança'],
    ['/images/graph_grey.png', 'Gestão de cobrança'],
    ['/images/transfer_grey.png', 'Transferência'],
    ['/images/barcode_grey.png', 'Pagamentos']
  ];

  let listArr2 = [
    ['/images/calendar_grey.png', 'Agendamentos'],
    ['/images/file2_grey.png', 'Comprovantes'],
    ['/images/percent_grey.png', 'Tarifas'],
    ['/images/whatsapp_grey.png', 'Fale conosco'],
    ['/images/label_grey.png', 'Benefícios']
  ];

  return (
    <Fragment>
      <nav className="sidenav">
        <button className="deposit-btn">DEPOSITAR</button>
        <h3 className="sidenav__title">ACESSO RÁPIDO</h3>
        <ul>
          {displayList(listArr1, sideBarActive, updateSideBar)}
        </ul>
        <h3 className="sidenav__title">MAIS</h3>
        <ul>
          {displayList(listArr2, sideBarActive, updateSideBar)}
        </ul>
      </nav>
    </Fragment>
  )
}

export default Sidenav;