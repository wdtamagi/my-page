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
        background-color: #bcbcc1;
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
        background-color: whitesmoke;
        z-index: -1;
      `}
    />
    {children}
  </div>
);

export default ResumeWraper;
