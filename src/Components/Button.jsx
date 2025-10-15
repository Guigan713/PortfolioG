import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : 'var(--primary)'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--primary);
    color: ${(props) =>
      props.outline ? 'var(--primary)' : 'var(--on-primary)'};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

function Button({ btnLink = '#', btnText, outline, download = false, newTab }) {
  const isExternal = /^https?:\/\//i.test(btnLink);
  const isFileDownload = download || /\.(pdf|zip|docx?)$/i.test(btnLink);

  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      {isExternal || isFileDownload ? (
        <a
          className="button"
          href={btnLink}
          download={isFileDownload ? '' : undefined}
          target={isExternal && newTab !== false ? '_blank' : undefined}
          rel={
            isExternal && newTab !== false ? 'noreferrer noopener' : undefined
          }
        >
          {btnText}
        </a>
      ) : (
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      )}
    </ButtonStyle>
  );
}

export default Button;
