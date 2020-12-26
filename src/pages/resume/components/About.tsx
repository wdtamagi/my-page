import { css } from '@emotion/react';
import React, { FC } from 'react';

import { useResumeStore } from 'src/store/useResumeStore';

import SectionTitle from './SectionTitle';

const About: FC = () => {
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
          text-align: justify;
          letter-spacing: 0.1rem;
        `}
      >
        {personalInformation?.about_me_description[0].text}
      </span>
    </div>
  );
};

export default About;
