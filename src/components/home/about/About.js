import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h3 className="about__title">
        Seu banco não precisa ser complicado,<br />
        <strong>ele deve ser Simples.</strong>
      </h3>
      <p className="about__text">
        Com a conta digital PJ, gerenciar as movimentações financeiras do seu negócio é muito
        mais fácil. Nossa solução foi pensando em melhor te atender desde a abertura da conta
        até seu dia a dia.
      </p>
      <div className="about__cards-container">
        <div className="about__card">
          <img src="/images/svg/timer.svg" alt="timer" className="about__card--img" />
          <h5 className="about__card--title">Rápida abertura de conta</h5>
          <p className="about__card--description">
            O processo de abertura de conta PJ é digital e
            com aprovação imediata.
          </p>
        </div>
        <div className="about__card">
          <img src="/images/svg/chat.svg" alt="chat" className="about__card--img" />
          <h5 className="about__card--title">Atendimento por WhatsApp</h5>
          <p className="about__card--description">
            Somos próximos de nossos clientes e estamos
            disponíveis quando sua empresa precisar.
          </p>
        </div>
        <div className="about__card">
          <img src="/images/svg/ticket.svg" alt="ticket" className="about__card--img" />
          <h5 className="about__card--title">Conta Simples +</h5>
          <p className="about__card--description">
            Oferecemos uma rede de parceiros com
            descontos e benefícios exclusivos.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;