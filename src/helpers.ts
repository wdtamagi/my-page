import { CMSPersonalInformation } from './store/useResumeStore';

export const getFullName = (
  personalInformation: CMSPersonalInformation,
): string => {
  return `${personalInformation.given_name} ${personalInformation.family_name}`;
};

export const formatDate = (date: Date | number): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date);
};
