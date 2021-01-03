import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { useResumeStore } from 'src/store/useResumeStore';

const ResumeTitle: FC = () => {
  const router = useRouter();
  const personalInformation = useResumeStore((s) => s.personalInformation);

  const isPdf = router.pathname === '/pdf' || router.pathname === '/api/pdf';

  const nameStyle = css`
    text-transform: uppercase;
    margin: 0px;
    font-size: 60px;
    letter-spacing: 0.5rem;

    ${!isPdf
      ? `
      @media (max-width: 575px) {
        font-size: 60px;
      }
      @media (max-width: 20.99cm) and (min-width: 576px) {
        font-size: 100px;
      }
      @media (min-width: 21cm) {
        font-size: 60px;
      }
    `
      : `
      font-size: 60px;;
    `}
  `;

  return (
    <div
      css={css`
        display: flex;

        ${!isPdf
          ? `   
            @media (max-width: 20.99cm) {
              background-color: #dcdce0;
              padding: 2rem 1.5rem;
              margin-bottom: 2rem;
            }
            @media (min-width: 21cm) {
              padding: 4rem 3rem 0;
            }
          `
          : `
            padding: 4rem 3rem 0;
          `}
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

          ${!isPdf
            ? `
            @media (max-width: 20.99cm) {
              display: none;
            }
            @media (min-width: 21cm) {
              display: block;
            }
          `
            : `
            display: block;
          `}
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
