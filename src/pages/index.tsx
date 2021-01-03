import { css } from '@emotion/react';
import React, { useRef } from 'react';
import { useSpring, animated, useChain } from 'react-spring';

const MainPage: React.FC = () => {
  const fristRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const fristProp = useSpring({
    config: { duration: 800 },
    from: { opacity: 0 },
    ref: fristRef,
    to: { opacity: 1 },
  });
  const secondProp = useSpring({
    config: { duration: 800 },
    from: { opacity: 0 },
    ref: secondRef,
    to: { opacity: 1 },
  });
  const thirdProp = useSpring({
    config: { duration: 800 },
    from: { opacity: 0 },
    ref: thirdRef,
    to: { opacity: 1 },
  });

  useChain([fristRef, secondRef, thirdRef]);

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
        padding: 3rem 0;

        & > * {
          grid-column: 2;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          font-size: 40px;
        `}
      >
        <animated.span style={fristProp}>Hello there!</animated.span>
        <animated.span style={secondProp}>
          {`I'm `}
          <b>Willian</b>.
        </animated.span>
        <animated.span style={thirdProp}>
          <b>Senior</b> Front End <b>Engineer</b>.
        </animated.span>
      </div>
    </div>
  );
};
('');

export default MainPage;
