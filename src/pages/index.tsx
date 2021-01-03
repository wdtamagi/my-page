import React from 'react';
import { css } from '@emotion/react';

const MainPage: React.FC = () => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns:
          1fr
          min(65ch, 100%)
          1fr;
        width: 100%;
        height: 100%;
        padding: 3rem 0;

        & > * {
          grid-column: 2;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          font-size: 40px;
        `}
      >
        <span>Hello there!</span>
        <span>
          {`I'm `}
          <b>Willian</b>.
        </span>
        <span>
          <b>Senior</b> Front End <b>Engineer</b>.
        </span>
      </div>
    </div>
  );
};
('');

export default MainPage;
