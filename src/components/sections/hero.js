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

    h2{
      font-size: 1rem;
    }

    h3{
      font-size: 1rem;
    }
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: "Uber Text Regular",sans-serif;
    font-size: .75rem;
    font-weight: 700;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    font-family: "Uber Main Medium",sans-serif;
    font-size: 3.5rem;
    margin-top: 10px;
    line-height: 1.1;
    letter-spacing: 0rem;
    padding-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: 2.75rem;
    }
  }

  h2 {
    font-family: "Uber Main Medium",sans-serif;
    font-size: 4rem;

 
  }

  p {
    font-family: "Uber Text Regular",sans-serif;
    font-size: .75rem;
    margin: 10px 0 0;
    max-width: 640px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 30px;
    font-family: "Uber Text Regular",sans-serif;
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 700;
  }

  span {
    color: white;
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
  <h1 style={{letterSpacing:`.35rem`}}>
    <Gradient dir="left-to-right" from="#83FF9E" to="#64FFDA">
      HEY, MY NAME IS
    </Gradient>
  </h1>;
  

  const two = <h2 className="big-heading"></h2>;
  
  const three = 
  <h3 className="big-heading">
    Deep Dave <br/>
    <Gradient dir="left-to-right" from="#83FF9E" to="#64FFDA">
      & I love building great products.
    </Gradient>
  </h3>;

  const four = (
    <>
      <p>
        I’m a product professional with 2.5+ years of experience in building and launching products that change user's lives in both the B2C and B2B SaaS industry.
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
