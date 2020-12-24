import { css, Global } from '@emotion/react';
import React from 'react';

export const GlobalStyle = (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100&display=swap');

      html,
      body {
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
      }

      #__next {
        width: 100%;
        height: 100%;
      }
    `}
  />
);
