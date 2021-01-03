import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

interface ResumeWraperProps {
  children: React.ReactNode;
}

const ResumeWraper: FC<ResumeWraperProps> = ({ children }) => {
  const router = useRouter();

  const isPdf = router.pathname === '/pdf' || router.pathname === '/api/pdf';

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background-color: #dcdce0;
          z-index: -1;

          ${!isPdf
            ? `
              @media (max-width: 20.99cm) {
                display: none;
              }
              @media (min-width: 21cm) {
                display: block;
              }
              `
            : 'display: block;'}
        `}
      />
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 40%;
          width: 60%;
          height: 100%;
          background-color: #f9f9f9;
          z-index: -1;

          ${!isPdf
            ? `
              @media (max-width: 20.99cm) {
                display: none;
              }
              @media (min-width: 21cm) {
                display: block;
              }
              `
            : 'display: block;'}
        `}
      />
      <div>{children}</div>
    </div>
  );
};

export default ResumeWraper;
