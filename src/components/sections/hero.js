import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';
import Gradient from 'rgt'


const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 700;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    line-height: 0.9;
    letter-spacing: -.17rem;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    border-radius: 15px;
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 700;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = 
  <h1 style={{letterSpacing:`.5rem`}}>
    <Gradient dir="left-to-right" from="#83FF9E" to="#64FFDA">
      HEY, MY NAME IS
    </Gradient>
  </h1>;
  

  const two = <h2 className="big-heading">Deep Dave.</h2>;
  
  const three = 
  <h3 className="big-heading">
    <Gradient dir="left-to-right" from="#83FF9E" to="#64FFDA">
      I build great products.
    </Gradient>
  </h3>;

  const four = (
    <>
      <p>
        I’m a product-minded engineer focused on the end-to-end development of great products that drive maximum utility for users.
      </p>
      
    </>
  );
  const five = (
    <a
      className="email-link"
      href="./resume.pdf"
      target="_blank"
      rel="noreferrer"
      style={{letterSpacing: `.25rem`}}>
      <Gradient dir="left-to-right" from="#83FF9E" to="#64FFDA">
        VIEW MY RESUME
      </Gradient>
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
