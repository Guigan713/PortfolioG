import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0.6rem;
  min-width: 5.6rem; /* keep labels from wrapping under 1-2 chars */
  text-align: center;

  svg {
    width: 3rem;
    height: auto;
    margin: 0; /* avoid double margins from parent icon container */
    display: block;
  }

  span {
    margin-top: 0.3rem;
    font-size: 1.1rem;
    line-height: 1.2;
    opacity: 0.85;
    white-space: nowrap;
  }
`;

function IconWithLabel({ icon, label }) {
  return (
    <Wrapper aria-label={label} title={label}>
      {icon}
      <span>{label}</span>
    </Wrapper>
  );
}

export default IconWithLabel;
