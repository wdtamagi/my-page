import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { useResumeStore } from 'src/store/useResumeStore';

import SectionTitle from './SectionTitle';

const Links: React.FC = () => {
  const links = useResumeStore((s) => s.links);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      `}
    >
      <SectionTitle title="LINKS" />
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        `}
      >
        {links
          ?.map((link) => (
            <a key={link.id} href={link.href} rel="noreferrer" target="_blank">
              <FontAwesomeIcon
                color="#212121"
                icon={['fab', link.icon_name]}
                css={css`
                  height: 25px;
                  &:hover {
                    opacity: 0.8;
                  }
                `}
              />
            </a>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Links;
