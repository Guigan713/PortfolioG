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
            Je m'appelle Guillaume, Je sors tout juste d'une formation de
            développeur web à la Wild Code School. J'ai exercé différents jobs
            au cours de ma vie (Industrie, Hotel restaurants, vente...) mais
            rien qui me plaisait vraiment. c'est pourquoi j'ai décidé de changer
            de vie et trouver un job qui me plait réellement. Me voila à
            présent, J'étudie différents languages de programmation et créé des
            projets vraiments cools. Vous trouverez sur mon Portfolio les
            différents projets auxquels j'ai participé et aussi plus
            d'informations à mon sujet. J'ai plusieures passions, comme par
            exemple la photographie, la musique ou encore la collection de
            sneakers. N'hesitez pas à me contacter si vous avez besoin d'un
            développeur web ou même si vous recherchez un photographe.
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
