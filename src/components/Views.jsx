import React from 'react';
import '../styles/Views.css';
import work from '../images/work.jpg';

const Views = () => {
  return (
    <div className="views">
      <div className="views__container">
        <img
          src={work}
          alt="Two people working on a pc"
          className="views__img"
        />
        <div className="views__content">
          <p>
            I beleive you don't need to have 7+ years of experience to build
            something cool that makes people freak out{' '}
            <span role="img" aria-label="laguhing emoji">
              🤣
            </span>
            .All it requires is work ethics to push yourself into what you do
            <span role="img" aria-label="Laptop emoji">
              💻
            </span>{' '}
            and a support to help you in your hard times{' '}
            <span role="img" aria-label="High Fi emoji">
              🙌
            </span>{' '}
            and for me it’s{' '}
            <span className="views__cp">TEAM CLEVER PROGRAMMER</span>
          </p>
          <p className="views__pwj">
            If you also wanna be part of the awesome community click{' '}
            <a href="https://www.cleverprogrammer.com/pwj">here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Views;
