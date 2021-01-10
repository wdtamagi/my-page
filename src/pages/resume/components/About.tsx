import { css } from '@emotion/react';
import { RichText } from 'prismic-reactjs';
import React from 'react';

import { useResumeStore } from 'src/store/useResumeStore';

import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  const personalInformation = useResumeStore((s) => s.personalInformation);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      `}
    >
      <SectionTitle title="PROFILE" />
      <span
        css={css`
          font-size: 15px;
          font-weight: 300;
          letter-spacing: 0.1rem;
        `}
      >
        <RichText render={personalInformation?.about_me_description} />
      </span>
    </div>
  );
};

export default About;
