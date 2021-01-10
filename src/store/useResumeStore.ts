import { IconName } from '@fortawesome/free-solid-svg-icons';
import produce from 'immer';
import { RichTextBlock } from 'prismic-reactjs';
import create from 'zustand';

export interface CMSEducationalExperience {
  achievement_description: RichTextBlock[];
  achievement_title: string;
  id: string;
  organization_name: string;
  year: number;
  start: Date;
  end: Date;
}

export interface CMSLink {
  href: string;
  icon_name: IconName;
  id: string;
  title: string;
}

export interface CMSPersonalInformation {
  about_me_description: RichTextBlock[];
  family_name: string;
  given_name: string;
  hobbies_and_interests: RichTextBlock[];
  id: string;
  job_title: string;
  location: string;
  email: string;
  phone: string;
  photo: { url: string; alt: string };
}

export interface CMSPRofessionalExperience {
  end_date?: string;
  id: string;
  is_current?: boolean;
  organization_name: string;
  position_description: RichTextBlock[];
  position_title: string;
  start_date: string;
  start: Date;
  location: string;
}

export interface CMSSkills {
  id: string;
  level: 1 | 2 | 3;
  level_name: string;
  skills_list: string;
  ord: number;
}

interface InitialState {
  educationalExperiences: CMSEducationalExperience[] | null;
  links: CMSLink[] | null;
  personalInformation: CMSPersonalInformation | null;
  professionalExperiences: CMSPRofessionalExperience[] | null;
  skills: CMSSkills[] | null;
}

const initialState: InitialState = {
  educationalExperiences: null,
  links: null,
  personalInformation: null,
  professionalExperiences: null,
  skills: null,
};

type ResumeState = {
  educationalExperiences: CMSEducationalExperience[] | null;
  links: CMSLink[] | null;
  personalInformation: CMSPersonalInformation | null;
  professionalExperiences: CMSPRofessionalExperience[] | null;
  skills: CMSSkills[] | null;
  reset: () => void;
  set: (fn: (state: InitialState) => void) => void;
};

export const useResumeStore = create<ResumeState>((set) => ({
  ...initialState,
  reset: () => set(() => initialState),
  set: (fn) => set(produce(fn)),
}));
