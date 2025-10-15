import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import Guigan from '../assets/images/IMG_7667.jpg';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .about-section-left,
  .about-section-right {
    flex: 1;
  }
  .about-section-right {
    img {
      border-radius: 5px;
      height: 680px;
    }
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
    font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
  }
  .about-section-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .about-section-left {
      flex: 4;
    }
    .about-section-right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .about-section-left,
    .about-section-right {
      width: 100%;
    }
    .about-section-right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .about-section-buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="about-section-left">
          <SectionTitle
            subheading="permettez moi de me présenter"
            heading="About me"
          />
          <PText>
            Je m'appelle Guillaume, tout juste sorti d'une formation
            d'Administrateur Système DevOps et diplômé. Ingénieur DevOps en
            recherche d'opportunité, j'automatise l'infrastructure et les
            déploiements (IaC et CI/CD), j'orchestre des workloads conteneurisés
            et je renforce la fiabilité et l'observabilité des plateformes.
            J'aime transformer des environnements complexes en systèmes simples,
            performants et reproductibles, avec un sens prononcé de la qualité,
            de la collaboration et de l'amélioration continue.
          </PText>
          <div className="about-section-buttons">
            <Button btnLink="/myworks" btnText="Works" />
            <Button btnLink="/about" btnText="en savoir plus" outline />
          </div>
        </div>
        <div className="about-section-right">
          <img src={Guigan} alt="Guigan" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}

export default AboutSection;
