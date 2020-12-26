import { css } from '@emotion/react';
import { faEnvelopeOpen, faMap } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';

import { useResumeStore } from 'src/store/useResumeStore';

import ContactItem from './ContactItem';
import SectionTitle from './SectionTitle';

const Contact: FC = () => {
  const personalInformation = useResumeStore((s) => s.personalInformation);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      `}
    >
      <SectionTitle title="CONTACT" />
      {personalInformation?.location ? (
        <ContactItem icon={faMap} value={personalInformation.location} />
      ) : null}
      {personalInformation?.email ? (
        <ContactItem
          icon={faEnvelopeOpen}
          value={
            <a
              href={`mailto:${personalInformation.email}`}
              css={css`
                text-decoration: none;
                color: inherit;

                &:hover {
                  text-decoration: underline;
                }
              `}
            >
              {personalInformation.email}
            </a>
          }
        />
      ) : null}
      {personalInformation?.phone ? (
        <ContactItem icon={faPhoneAlt} value={personalInformation.phone} />
      ) : null}
    </div>
  );
};

export default Contact;
