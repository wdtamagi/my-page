import { css } from '@emotion/react';
import React, { FC } from 'react';

import { useResumeStore } from 'src/store/useResumeStore';

import SectionTitle from './SectionTitle';
import ExperienceItem from './ExperienceItem';

const Experience: FC = () => {
  const professionalExperiences = useResumeStore(
    (s) => s.professionalExperiences,
  );

  if (professionalExperiences == null) {
    return null;
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      `}
    >
      <SectionTitle title="EXPERIENCE" />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 2rem;
          font-size: 15px;
          font-weight: 300;
          text-align: justify;
          letter-spacing: 0.1rem;
        `}
      >
        {[...professionalExperiences]
          .sort((a, b) => {
            if (a.start > b.start) {
              return -1;
            }
            if (b.start > a.start) {
              return 1;
            }

            return 0;
          })
          .map((experience) => (
            <ExperienceItem key={experience.id} item={experience} />
          ))}
      </div>
    </div>
  );
};

export default Experience;
