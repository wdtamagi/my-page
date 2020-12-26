import { css } from '@emotion/react';
import React, { FC } from 'react';

interface ResumeWraperProps {
  children: React.ReactNode;
}

const ResumeWraper: FC<ResumeWraperProps> = ({ children }) => (
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
      `}
    />
    <div>{children}</div>
  </div>
);

export default ResumeWraper;
