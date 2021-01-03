import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { useSpring, animated, useChain } from 'react-spring';

const MainPage: React.FC = () => {
  const router = useRouter();

  const fristRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const buttonRef = useRef(null);

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
  const buttonProp = useSpring({
    config: { duration: 800 },
    from: { opacity: 0 },
    ref: buttonRef,
    to: { opacity: 1 },
  });

  const [active, setActive] = useState(false);
  const { x } = useSpring({
    config: { duration: 1000 },
    from: { x: 0 },
    x: active ? 1 : 0,
  });

  useChain([fristRef, secondRef, thirdRef, buttonRef]);

  const handleClick = (e) => {
    e.preventDefault();
    setActive(true);
    router.push('/resume');
  };

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns:
          1fr
          min(65ch, calc(100% - 1rem))
          1fr;
        width: 100%;
        height: 100%;
        padding: 3rem 1rem;

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
        <animated.button
          style={
            active
              ? {
                  opacity: x.interpolate({ output: [0.3, 1], range: [0, 1] }),
                  transform: x
                    .interpolate({
                      output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                      range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    })
                    .interpolate((x) => `scale(${x})`),
                }
              : buttonProp
          }
          css={css`
            background: transparent;
            border: 1px solid #696969;
            cursor: pointer;
            font-size: 30px;
            font-family: 'Roboto', sans-serif;
            width: 200px;
            margin-top: 5rem;
          `}
          onClick={handleClick}
        >
          {'My Resume'}
        </animated.button>
      </div>
    </div>
  );
};
('');

export default MainPage;
