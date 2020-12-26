import { InferGetStaticPropsType } from 'next';
import React, { FC } from 'react';

import { getCMSIntegration } from 'src/cms';
import {
  CMSPersonalInformation,
  CMSEducationalExperience,
  CMSLink,
  CMSPRofessionalExperience,
  CMSSkills,
  useResumeStore,
} from 'src/store/useResumeStore';

import Resume from './components/Resume';

export const getStaticProps = async (): Promise<{
  props: {
    educationalExperiences: CMSEducationalExperience[];
    links: CMSLink[];
    personalInformation: CMSPersonalInformation;
    professionalExperiences: CMSPRofessionalExperience[];
    skills: CMSSkills[];
  };
  revalidate: number;
}> => {
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
  const set = useResumeStore((s) => s.set);
  set((s) => {
    s.educationalExperiences = educationalExperiences;
    s.links = links;
    s.personalInformation = personalInformation;
    s.professionalExperiences = professionalExperiences;
    s.skills = skills;
  });

  return <Resume />;
};

export default ResumePage;
