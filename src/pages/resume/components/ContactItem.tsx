import { css } from '@emotion/react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface ContactItemProps {
  icon: IconDefinition;
  value: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, value }) => (
  <div
    css={css`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 15px;
      font-weight: 300;
    `}
  >
    <FontAwesomeIcon
      icon={icon}
      css={css`
        height: 15px;
        min-width: 30px;
      `}
    />
    <span>{value}</span>
  </div>
);

export default ContactItem;
