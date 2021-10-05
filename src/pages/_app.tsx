import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { AppPropsType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import React from 'react';

import { GlobalStyle } from '../global/GlobalStyle';

config.autoAddCss = false;
library.add(fab);

const MyApp = ({ Component, pageProps }: AppPropsType): JSX.Element => {
  return (
    <>
      {GlobalStyle}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" sizes="192x192" href="/img/icons/favicon-192.png" />
        <link rel="apple-touch-icon" href="/img/icons/favicon-512.png" />
        <link rel="icon" href="/img/icons/favicon.ico" />
        <title>Will</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
