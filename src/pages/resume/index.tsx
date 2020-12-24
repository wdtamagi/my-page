import { css } from '@emotion/react';
import { InferGetStaticPropsType } from 'next';
import React, { FC } from 'react';

import ResumeWrapper from './components/ResumeWrapper';
import { getCMSIntegration } from '../../cms/';

export const getStaticProps = async () => {
  const CMS = getCMSIntegration();
  const personalInformation = await CMS.getPersonalInformation();
  const professionalExperiences = await CMS.getProfessionalExperiences();
  const educationalExperiences = await CMS.getEducationalExperiences();
  const skills = await CMS.getSkills();
  const links = await CMS.getLinks();

  return {
    props: {
      educationalExperiences,
      links,
      personalInformation,
      professionalExperiences,
      skills,
    },
    revalidate: 60,
  };
};

type ResumePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ResumePage: FC<ResumePageProps> = ({
  personalInformation,
  educationalExperiences,
  links,
  professionalExperiences,
  skills,
}) => {
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

        & > * {
          grid-column: 2;
        }
      `}
    >
      <ResumeWrapper>
        <span>{personalInformation.given_name}</span>
        <span>{personalInformation.family_name}</span>
      </ResumeWrapper>
    </div>
  );
};

export default ResumePage;
