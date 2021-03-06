import { css } from '@emotion/react';
import React from 'react';

import { useResumeStore } from 'src/store/useResumeStore';

import SectionTitle from './SectionTitle';

const Skills: React.FC = () => {
  const skills = useResumeStore((s) => s.skills);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      `}
    >
      <SectionTitle title="SKILLS" />
      <ul
        css={css`
          margin: 0;
          padding: 0;
          font-size: 15px;
          font-weight: 300;
          list-style: circle inside;
        `}
      >
        {[...(skills ?? [])]
          ?.sort((a, b) => {
            if (a.ord > b.ord) {
              return 1;
            }

            if (a.ord < b.ord) {
              return -1;
            }

            return 0;
          })
          .map((skill) => (
            <li key={skill.id}>{skill.skills_list}</li>
          ))}
      </ul>
    </div>
  );
};

export default Skills;
