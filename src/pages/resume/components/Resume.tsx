import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from '@emotion/react';
import Tippy from '@tippyjs/react';
import { useRouter } from 'next/router';
import React from 'react';

import 'tippy.js/dist/tippy.css';

import About from './About';
import ResumeWrapper from './ResumeWrapper';
import ResumeTitle from './ResumeTitle';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Links from './Links';

const Resume: React.FC = () => {
  const router = useRouter();
  const isPdf = router.pathname === '/pdf' || router.pathname === '/api/pdf';

  return (
    <div
      css={css`
        position: relative;
        display: grid;
        grid-template-columns:
          1fr
          min(22cm, 100%)
          1fr;
        width: 100%;
        height: 100%;

        & > * {
          grid-column: 2;
        }

        @page {
          size: 22cm 150cm;
        }
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          gap: 0.5rem;
          z-index: 1;
          @media print {
            display: none;
          }
        `}
      >
        <Tippy content="Download">
          <button
            css={css`
              width: 30px;
              height: 30px;
              background: transparent;
              border: none;
              cursor: pointer;
              color: #212121;

              &:hover {
                opacity: 0.8;
              }
            `}
            onClick={() => window.open('/api/pdf')}
          >
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </Tippy>
      </div>
      <ResumeWrapper>
        <ResumeTitle />
        <div
          css={css`
            display: grid;

            ${!isPdf
              ? `
                @media (max-width: 20.99cm) {
                  grid-template-columns: 1fr;
                  gap: 2rem;
                }
                @media (min-width: 21cm) {
                  grid-template-columns: 40% auto;
                }
              `
              : 'grid-template-columns: 40% auto;'}
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 2rem;

              ${!isPdf
                ? `
                  @media (max-width: 20.99cm) {
                    padding: 0 1.5rem;
                  }
                  @media (min-width: 21cm) {
                    padding-left: 3rem;
                    padding-right: 1.5rem;
                  }
                `
                : `
                  padding-left: 3rem;
                  padding-right: 1.5rem;
                `}
            `}
          >
            <Contact />
            <Education />
            <Skills />
            <Links />
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 2rem;

              ${!isPdf
                ? `
                  @media (max-width: 20.99cm) {
                    padding: 0 1.5rem;
                  }
                  @media (min-width: 21cm) {
                    padding-right: 3rem;
                    padding-left: 1.5rem;
                  }
                `
                : `
                  padding-right: 3rem;
                  padding-left: 1.5rem;
                `}
            `}
          >
            <About />
            <Experience />
          </div>
        </div>
      </ResumeWrapper>
    </div>
  );
};

export default Resume;
