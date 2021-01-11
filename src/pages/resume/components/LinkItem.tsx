import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { animated } from 'react-spring';

import { CMSLink } from 'src/store/useResumeStore';
import useBoop from 'src/hooks/useBoop';

enum iconColors {
  'npm' = '#ce4038',
  'linkedin' = '#1766c2',
  'github' = '#313030',
  'twitter' = '#419cea',
}

interface LinkItemProps {
  link: CMSLink;
}

const LinkItem: React.FC<LinkItemProps> = ({ link }) => {
  const [style, trigger] = useBoop({ rotation: 20 });

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      <a
        onMouseEnter={trigger}
        style={style}
        href={link.href}
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          color="#212121"
          icon={['fab', link.icon_name]}
          css={css`
            height: 25px;
            transition: color 500ms;

            &:hover {
              color: ${iconColors[link.icon_name]};
            }
          `}
        />
      </a>
    </animated.span>
  );
};

export default LinkItem;
