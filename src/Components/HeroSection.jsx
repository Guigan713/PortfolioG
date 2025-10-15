import React from 'react';
import styled from 'styled-components';
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';
import { SiGitlab } from 'react-icons/si';
// import Button from './Button';
import Guigan from '../assets/images/bnf.jpg';
import PText from './PText';
// Inline SVGs as React components so we can color them via CSS currentColor
const SocialMediaArrowIcon = () => (
  <svg
    width="16"
    height="46"
    viewBox="0 0 16 46"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    focusable="false"
  >
    <path
      d="M7.2929 45.7071C7.68342 46.0976 8.31659 46.0976 8.70711 45.7071L15.0711 39.3431C15.4616 38.9526 15.4616 38.3195 15.0711 37.9289C14.6805 37.5384 14.0474 37.5384 13.6569 37.9289L8 43.5858L2.34315 37.9289C1.95263 37.5384 1.31946 37.5384 0.928936 37.9289C0.538412 38.3195 0.538412 38.9526 0.928936 39.3431L7.2929 45.7071ZM7 1.02965e-07L7 45L9 45L9 -1.02965e-07L7 1.02965e-07Z"
      fill="currentColor"
      fillOpacity="0.85"
    />
  </svg>
);
const ScrollDownArrowIcon = () => (
  <svg
    width="8"
    height="44"
    viewBox="0 0 8 44"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    focusable="false"
  >
    <path
      d="M3.64645 43.3536C3.84171 43.5488 4.15829 43.5488 4.35356 43.3536L7.53554 40.1716C7.7308 39.9763 7.7308 39.6597 7.53554 39.4645C7.34027 39.2692 7.02369 39.2692 6.82843 39.4645L4 42.2929L1.17157 39.4645C0.976312 39.2692 0.65973 39.2692 0.464468 39.4645C0.269206 39.6597 0.269206 39.9763 0.464468 40.1716L3.64645 43.3536ZM3.5 2.18557e-08L3.5 43L4.5 43L4.5 -2.18557e-08L3.5 2.18557e-08Z"
      fill="currentColor"
      fillOpacity="0.85"
    />
  </svg>
);

const HomeStyle = styled.div`
  .home {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .home__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .home__name {
      font-size: 7rem;
      font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
      color: var(--primary);
    }
  }
  .home__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-2);
  }
  .home__infos {
    margin-top: 2rem; /* move text outside the photo frame */
    p {
      color: var(--primary);
      font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
      font-style: italic;
    }
  }
  .home__social,
  .home__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .home__social {
    left: 50px;
  }
  .home__scrollDown {
    right: 50px;
  }
  .home-social-indicator,
  .home__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
      font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
      color: var(--primary);
    }
    /* color drives SVG via currentColor */
    color: var(--primary);
    svg {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      display: block;
    }
  }
  .home__scrollDown {
    svg {
      max-height: 70px;
    }
  }
  .home-social-text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      .logo-fb {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: #3b5998;
      }
      .logo-insta {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: var(--primary);
      }
      .logo-twitter {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: var(--primary);
      }
      .logo-gh {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: var(--primary);
      }
      .logo-li {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: var(--primary);
      }
      .logo-gl {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: var(--primary);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .home {
      min-height: 750px;
    }
    .home__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .home__name {
        font-size: 4.5rem;
      }
    }
    .home__img {
      height: 300px;
    }
    .home__infos {
      margin-top: 3rem;
    }
    .home__social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      .home-social-indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .home-social-text {
        ul {
          li {
            a {
              font-size: 1.9rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .home__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

function HeroSection() {
  return (
    <HomeStyle>
      <div className="home">
        <div className="container">
          <h1 className="home__heading">
            <span>Hello,</span>
            <span className="home__name">I am Guillaume</span>
          </h1>
          <div className="home__img">
            <img src={Guigan} alt="Guigan" />
          </div>
          <div className="home__infos">
            <PText>
              Passionné par la culture DevOps, j’aime concevoir des
              environnements fiables et automatisés. J’ai renforcé mes
              compétences en administration système, CI/CD et Infrastructure as
              Code, et je veux les mettre en pratique au quotidien. Curieux et
              orienté impact, je progresse en continu au contact d’experts et au
              fil de mes projets.
            </PText>
            {/* <Button btnLink="/myworks" btnText="See my works" outline={false} /> */}
          </div>
          <div className="home__social">
            <div className="home-social-indicator">
              <p>Follow</p>
              <SocialMediaArrowIcon />
            </div>
            <div className="home-social-text">
              <ul>
                <li>
                  <a
                    className="logo-insta"
                    href="https://www.instagram.com/Guigan713"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineInstagram />
                  </a>
                </li>
                <li>
                  <a
                    className="logo-gl"
                    href="https://gitlab.com/Guigan713"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGitlab />
                  </a>
                </li>
                <li>
                  <a
                    className="logo-gh"
                    href="https://www.github.com/Guigan713"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                </li>
                <li>
                  <a
                    className="logo-li"
                    href="https://www.linkedin.com/in/guillaume-lequin-500866171/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="home__scrollDown">
            <p>Scroll</p>
            <ScrollDownArrowIcon />
          </div>
        </div>
      </div>
    </HomeStyle>
  );
}

export default HeroSection;
