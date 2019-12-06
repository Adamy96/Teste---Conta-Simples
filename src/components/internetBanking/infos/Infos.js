import React from 'react';
import './Infos.scss';

const formatNumber = (num) => {
  let formatedNum = num.toLocaleString().replace(',', '.');
  let lastIndex = formatedNum.lastIndexOf('.');
  formatedNum = formatedNum.slice(0, lastIndex) + formatedNum.slice(lastIndex);
  formatedNum = formatedNum.slice(0, lastIndex) + ',' + formatedNum.slice(-2);
  return formatedNum;
}

const getCurrentMonth = () => {
  let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  let date = new Date();
  return meses[date.getMonth()]
}

const displaySideBox = (comparison, type='percentage') => {
  let src = "/images/down_arrow_white.png";
  let defineColor = "infos__profit--negative";

  if (parseFloat(comparison) >= 0) {
    src = "/images/up_arrow_white.png";
    defineColor = "infos__profit--positive";
  }

  if (type !== 'percentage') {
    comparison = `R$ ${parseFloat(comparison).toFixed(2).replace('.', ',')}`;
  }

  return (
    <span className={defineColor}>
      <span>
        <img src={src} alt="up arrow"/>
        {comparison}
      </span> 
    </span>
  )
}

const displayBalance = (balance) => {
  if (balance) {
    if (balance.toString().includes('.')) {
      balance = formatNumber(balance);
    } else {
      balance = formatNumber(parseFloat(balance).toFixed(2));
    }
  }

  return (
    <p className="infos__left--balance">
      <span>R$</span> &nbsp;{balance}
    </p>
  )
}

const displayValues = (value, type='percentage') => {
  let character = '-';

  if (value >= 0) {
    character = '+';
  }

  if (value) {
    if (value.toString().includes('.')) {
      value = formatNumber(value);
    } else {
      value = formatNumber(parseFloat(value).toFixed(2));
    }
  }
  
  return <p className="infos__right--value">{character}R$ {value}</p>
}

const displayMessage = (value, type='percentage') => {
  if (type === 'percentage') {
    let comparison = 'abaixo';
    if (parseFloat(value) >= 0) {
      comparison = 'acima';
    }
    return (
      <p className='infos__message'>{Math.abs(parseInt(value))}% {comparison} do mesmo período do mês anterior</p>
    )
  } else {
    return (
      <p className='infos__message'>Ontem seu rendimendo foi de R$ {parseFloat(value).toFixed(2)}</p>
    )
  }
}

// Desconstruindo as props em variáveis
const Infos = ({state: {userData: { 
    lastUpdate,
    balance,
    balanceComparison,
    profit,
    profitComparison,
    latestEntries,
    latestEntriesComparison
  }}}) => {

  return (
    <div className="infos">
      <h3 className="infos__title">Resumo de {getCurrentMonth()}</h3>
      <p className="infos__last-update">{lastUpdate}</p>

      <div className="infos__container">
        <div className="infos__left">
          <h3 className="infos__container--title">Saldo total</h3>
          <div className="infos__container--values">
            {displayBalance(balance, balanceComparison, 'percentage')}
            {displaySideBox(balanceComparison)}
          </div>
          {displayMessage(balanceComparison)}
        </div>

        <div className="infos__right">
          <div className="infos__right-container">
            <h3 className="infos__container--title">Rentabilidade CDI</h3>
            <p className="infos__right--month">ESTE MÊS</p>
            <div className="infos__container--values">
              {displayValues(profit, profitComparison, '')}
              {displaySideBox(profitComparison, '')}
            </div>
            {displayMessage(profitComparison, '')}
          </div>

          <div className="infos__spacer"></div>

          <div className="infos__right-container">
            <h3 className="infos__container--title">Últimas entradas</h3>
            <p className="infos__right--month">ESTE MÊS</p>
            <div className="infos__container--values">
              {displayValues(latestEntries, latestEntriesComparison)}
              {displaySideBox(latestEntriesComparison)}
            </div>
            
            {displayMessage(latestEntriesComparison)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infos;