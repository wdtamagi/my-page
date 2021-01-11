import { css } from '@emotion/react';
import React from 'react';

import { useResumeStore } from 'src/store/useResumeStore';

import SectionTitle from './SectionTitle';
import LinkItem from './LinkItem';

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
        {links?.map((link) => <LinkItem key={link.id} link={link} />).reverse()}
      </div>
    </div>
  );
};

export default Links;
