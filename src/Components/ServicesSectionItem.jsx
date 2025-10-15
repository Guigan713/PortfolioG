import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
// import PText from './PText';

const ItemStyle = styled.div`
  text-align: center;
  .services-item-icon {
    svg {
      width: 3rem;
      margin: 1rem;
    }
  }
  .icon-tooltip {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.6rem;
    min-width: 5.6rem;
    text-align: center;
  }
  .icon-label {
    display: none; /* hidden by default for mobile */
    margin-top: 0.3rem;
    font-size: 1.1rem;
    line-height: 1.2;
    opacity: 0.8;
    white-space: nowrap;
  }
  .services-group {
    margin-top: 1rem;
  }
  .group-label {
    display: block;
    font-size: 1.2rem;
    opacity: 0.8;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
  }
  .services-item-title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
    color: var(--primary);
  }
  .para {
    margin-top: 2rem;
  }
  @media only screen and (min-width: 769px) {
    .icon-label {
      display: inline-block; /* show labels on desktop */
    }
  }
`;

function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Front-End',
  icons,
  icons2,
  icons3,
  icons4,
  icons5,
  icons6,
  icons7,
  icons8,
  icons9,
  icons10,
  icons11,
  icons12,
  icons13,
  icons14,
  icons15,
  icons16,
  icons17,
  icons18,
  icons19,
  icons20,
  icons21,
  icons22,
  icons23,
  icons24,
}) {
  const renderIcon = (entry) => {
    if (!entry) return null;
    // Support either a React element or an object like { icon: <El/>, label: 'Name' }
    if (entry && entry.icon && entry.label) {
      const iconEl = React.isValidElement(entry.icon)
        ? React.cloneElement(entry.icon, {
            title: entry.label,
            'aria-label': entry.label,
            role: 'img',
          })
        : entry.icon;
      return (
        <span
          className="icon-tooltip"
          title={entry.label}
          aria-label={entry.label}
        >
          {iconEl}
          <span className="icon-label">{entry.label}</span>
        </span>
      );
    }
    // If a raw element is passed, just return it as-is
    return entry;
  };
  return (
    <ItemStyle>
      <div className="services-item-icon">{icon}</div>
      <div className="services-item-title">{title}</div>
      <div className="services-item-icon services-group">
        {renderIcon(icons)}
        {renderIcon(icons2)}
        {renderIcon(icons3)}
        {renderIcon(icons4)}
        {renderIcon(icons5)}
        {renderIcon(icons6)}
        {renderIcon(icons7)}
        {renderIcon(icons8)}
        {renderIcon(icons9)}
        {renderIcon(icons10)}
        {renderIcon(icons11)}
        {renderIcon(icons12)}
        {renderIcon(icons13)}
        {renderIcon(icons14)}
        {renderIcon(icons15)}
        {renderIcon(icons16)}
        {renderIcon(icons17)}
        {renderIcon(icons18)}
        {renderIcon(icons19)}
        {renderIcon(icons20)}
        {renderIcon(icons21)}
        {renderIcon(icons22)}
        {renderIcon(icons23)}
        {renderIcon(icons24)}
      </div>
    </ItemStyle>
  );
}

export default ServicesSectionItem;
