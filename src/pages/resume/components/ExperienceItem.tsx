import { css } from '@emotion/react';
import { RichText } from 'prismic-reactjs';
import React from 'react';

import { CMSPRofessionalExperience } from 'src/store/useResumeStore';

interface ExperienceItemProps {
  item: CMSPRofessionalExperience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ item }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
    `}
  >
    <span
      css={css`
        font-weight: 600;
      `}
    >
      {item?.position_title}
    </span>
    <span
      css={css`
        font-size: 12px;
        font-style: italic;
        font-weight: 500;
      `}
    >{`${item?.organization_name} | ${item?.start_date} - ${
      item?.is_current ? 'Current' : item?.end_date
    }`}</span>
    <span
      css={css`
        font-size: 12px;
      `}
    >
      {item.location}
    </span>
    <span
      css={css`
        margin-top: 0.5rem;
      `}
    >
      <RichText render={item?.position_description} />
    </span>
  </div>
);

export default ExperienceItem;
