import { css } from '@emotion/react';
import { faEnvelopeOpen, faMap } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { ENODATA } from 'constants';
import React, { FC } from 'react';

import { useResumeStore } from 'src/store/useResumeStore';

import SectionTitle from './SectionTitle';

const Education: FC = () => {
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
