import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import SectionHeader from '../SectionHeader/SectionHeader';

interface Props {
  personalInformation: CMSPersonalInformation<unknown>;
  privateInformation?: CMSPrivateInformation<unknown>[];
}

const ContactInformation = (props: Props): JSX.Element => {
  const { personalInformation, privateInformation } = props;
  const CMS = getCMSIntegration();

  return (
    <article>
      <SectionHeader icon={faIdCard} text="Contact Information" />
      <ul className="list-unstyled">
        <li>
          <div className="row mt-md-0 mt-xxxs">
            <div className="col-lg-2 col-sm-3">
              <strong>Location:</strong>
            </div>
            <div className="col">{personalInformation.location}</div>
          </div>
        </li>
        {personalInformation.email ? (
          <li>
            <a href={`mailto:${personalInformation.email}`}>
              {personalInformation.email}
            </a>
          </li>
        ) : null}
        {personalInformation.phone ? (
          <li>{personalInformation.phone}</li>
        ) : null}
      </ul>
    </article>
  );
};

export default ContactInformation;
