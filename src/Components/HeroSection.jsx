import React from 'react';
import styled from 'styled-components';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';
// import Button from './Button';
import Guigan from '../assets/images/bnf.jpg';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

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
      color: var(--white);
    }
  }
  .home__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .home__infos {
    margin-top: -10rem;
    p {
      color: var(--white);
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
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0auto;
      object-fit: contain;
    }
  }
  .home__scrollDown {
    img {
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
        color: #8a3ab9;
      }
      .logo-twitter {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: #1da1f2;
      }
      .logo-gh {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: #e8eaea;
      }
      .logo-li {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: #0072b1;
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
              Je suis un d??veloppeur web junior venant tout juste de finir une
              formation de d??veloppeur web Full Stack ?? la Wild Code School. Je
              suis toujours en qu??te de nouvelles choses ?? apprendre.
            </PText>
            {/* <Button btnLink="/myworks" btnText="See my works" outline={false} /> */}
          </div>
          <div className="home__social">
            <div className="home-social-indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="arrow" />
            </div>
            <div className="home-social-text">
              <ul>
                <li>
                  <a
                    className="logo-fb"
                    href="https://www.facebook.com/riley.macfadden"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineFacebook />
                  </a>
                </li>
                <li>
                  <a
                    className="logo-insta"
                    href="https://www.instagram.com/Guigan713"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineInstagram />
                  </a>
                </li>
                <li>
                  <a
                    className="logo-twitter"
                    href="https://www.twitter.com/Guigan713"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterSquare />
                  </a>
                </li>
                <li>
                  <a
                    className="logo-gh"
                    href="https://www.github.com/Guigan713"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                </li>
                <li>
                  <a
                    className="logo-li"
                    href="https://www.linkedin.com/in/guillaume-lequin-500866171/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="home__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="scrolldown arrow" />
          </div>
        </div>
      </div>
    </HomeStyle>
  );
}

export default HeroSection;
