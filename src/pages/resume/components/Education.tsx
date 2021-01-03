import { css } from '@emotion/react';
import React from 'react';

import { useResumeStore } from 'src/store/useResumeStore';

import SectionTitle from './SectionTitle';

const Education: React.FC = () => {
  const educationalExperiences = useResumeStore(
    (s) => s.educationalExperiences,
  );

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      `}
    >
      <SectionTitle title="EDUCATION" />
      {educationalExperiences?.map(
        ({ id, achievement_title, organization_name, start, end }) => (
          <div
            key={id}
            css={css`
              display: flex;
              flex-direction: column;
              font-size: 15px;
              font-weight: 300;
            `}
          >
            <span
              css={css`
                font-weight: 600;
              `}
            >
              {achievement_title}
            </span>
            <span
              css={css`
                font-style: italic;
              `}
            >
              {organization_name}
            </span>
            <span
              css={css`
                font-style: italic;
              `}
            >
              {`${start} - ${end}`}
            </span>
          </div>
        ),
      )}
    </div>
  );
};

export default Education;
