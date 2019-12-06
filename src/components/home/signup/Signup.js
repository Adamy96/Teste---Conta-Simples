import React, { Fragment } from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <Fragment>
      <section className="signup">
        <h3 className="signup__title">Ainda não é membro?</h3>
        <p className="signup__description">
          Não perca tempo e aproveite todos os benefícios que a Conta Simples<br />
          pode lhe proporcionar.
        </p>
        <button className="signup__btn">Pedir convite</button>
      </section>
      
      <button className="signup__mobile">PEDIR CONVITE</button>

      
    </Fragment>
  )
}

export default Signup;