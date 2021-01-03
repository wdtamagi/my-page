import {
  prismicCMSLink,
  prismicCMSName,
  prismicGetEducationalExperiences,
  prismicGetLinks,
  prismicGetPersonalInformation,
  prismicGetProfessionalExperiences,
  prismicGetSkills,
  prismicParseDate,
  PrismicRichTextComponent,
} from './prismic';

export const apiEndpoint = process.env.CMS_ENDPOINT;
export const accessToken = process.env.CMS_KEY;
export interface CMSIntegration {
  RichTextComponent: ({ richText: unknown }) => JSX.Element;
  getEducationalExperiences: typeof prismicGetEducationalExperiences;
  getLinks: typeof prismicGetLinks;
  getPersonalInformation: typeof prismicGetPersonalInformation;
  getProfessionalExperiences: typeof prismicGetProfessionalExperiences;
  getSkills: typeof prismicGetSkills;
  link: string;
  name: string;
  parseDate: (date: string) => Date;
}

export const getCMSIntegration = (): CMSIntegration => ({
  RichTextComponent: PrismicRichTextComponent,
  getEducationalExperiences: prismicGetEducationalExperiences,
  getLinks: prismicGetLinks,
  getPersonalInformation: prismicGetPersonalInformation,
  getProfessionalExperiences: prismicGetProfessionalExperiences,
  getSkills: prismicGetSkills,
  link: prismicCMSLink,
  name: prismicCMSName,
  parseDate: prismicParseDate,
});
