import { css, Global } from '@emotion/react';
import React from 'react';

export const GlobalStyle = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        color: #212121;
      }

      #__next {
        width: 100%;
        height: 100%;
      }
    `}
  />
);
