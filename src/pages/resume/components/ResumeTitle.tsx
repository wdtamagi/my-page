import { css } from '@emotion/react';
import React, { FC } from 'react';

import { useResumeStore } from 'src/store/useResumeStore';

const nameStyle = css`
  text-transform: uppercase;
  margin: 0px;
  font-size: 60px;
  letter-spacing: 0.5rem;
`;

const ResumeTitle: FC<ResumeTitleProps> = () => {
  const personalInformation = useResumeStore((s) => s.personalInformation);

  return (
    <div
      css={css`
        display: flex;
        padding: 4rem 3rem 3rem;
      `}
    >
      <div
        css={css`
          flex: 1;
        `}
      >
        <p css={nameStyle}>{personalInformation?.given_name}</p>
        <p css={nameStyle}>{personalInformation?.family_name}</p>
        <p
          css={css`
            font-size: 30px;
            font-weight: 300;
            margin: 0;
          `}
        >
          {personalInformation?.job_title}
        </p>
      </div>
      <div
        css={css`
          width: 300px;
        `}
      >
        <img
          src={personalInformation?.photo.url}
          alt={personalInformation?.photo.alt}
        />
      </div>
    </div>
  );
};

export default ResumeTitle;
