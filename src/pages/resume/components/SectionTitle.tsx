import { css } from '@emotion/react';
import React from 'react';

interface SectionTitleProps {
  title: React.ReactNode;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <span
      css={css`
        margin-bottom: 0.5rem;
        border-bottom: 2px solid #8c8c8c;
        letter-spacing: 0.2rem;
        font-weight: 600;
      `}
    >
      {title}
    </span>
  );
};

export default SectionTitle;
