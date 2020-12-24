import { CMSLink } from '../_types/CMSLink';
import {
  prismicCMSLink,
  prismicCMSName,
  prismicGetEducationalExperiences,
  prismicGetLinks,
  prismicGetPersonalInformation,
  prismicGetPrivateInformation,
  prismicGetProfessionalExperiences,
  prismicGetSkills,
  prismicParseDate,
  PrismicRichText,
  PrismicRichTextComponent,
} from './prismic';

export const apiEndpoint = process.env.CMS_ENDPOINT;
export const accessToken = process.env.CMS_KEY;
export interface CMSIntegration {
  RichTextComponent: ({ richText: unknown }) => JSX.Element;
  getEducationalExperiences: () => Promise<
    CMSEducationalExperience<PrismicRichText>[]
  >;
  getLinks: () => Promise<CMSLink[]>;
  getPersonalInformation: () => Promise<
    CMSPersonalInformation<PrismicRichText>
  >;
  getPrivateInformation: () => Promise<
    CMSPrivateInformation<PrismicRichText>[]
  >;
  getProfessionalExperiences: () => Promise<
    CMSPRofessionalExperience<PrismicRichText>[]
  >;
  getSkills: () => Promise<CMSSkills[]>;
  link: string;
  name: string;
  parseDate: (date: string) => Date;
}

export const getCMSIntegration = (): CMSIntegration => ({
  RichTextComponent: PrismicRichTextComponent,
  getEducationalExperiences: prismicGetEducationalExperiences,
  getLinks: prismicGetLinks,
  getPersonalInformation: prismicGetPersonalInformation,
  getPrivateInformation: prismicGetPrivateInformation,
  getProfessionalExperiences: prismicGetProfessionalExperiences,
  getSkills: prismicGetSkills,
  link: prismicCMSLink,
  name: prismicCMSName,
  parseDate: prismicParseDate,
});
