import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import Gradient from 'rgt';

const StyledAboutSection = styled.section`
  max-width: 900px;

  h2 {
    font-family: "Uber Main Medium",sans-serif;
    font-size: 1.25rem;
    letter-spacing: .35rem;
    }

  .inner {
    display: grid;
    font-family: "Uber Text Regular",sans-serif;
    font-size: .75rem;
    line-height: 1.5;
    grid-template-columns: 3fr 3fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: "Uber Text Regular",sans-serif;
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Java', 'JavaScript (ES6+)', 'C', 'TypeScript', 'Python', 'React', 'Node.js', 'Figma', 'Adobe XD', 'Jira'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">
        ABOUT ME
      </h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello!
              
              My name is Deep and I enjoy designing and creating software products that change humanity for good.
              My interest in technology started at the tender age of 15, when I built my first social network called 
              Dynalounge - a social network where you could send reactions and messages to your friends using our vast library of open source music and videos. After my startup, I was even more motivated to pursue software at University, and so I did!.

            </p>

            <p>
              Fast-forward to 2022, I have graduated from Dalhousie University in Canada, worked for 

                
                                    {' '}<a href="https:/www.haligone.com">
                                      <Gradient dir="left-to-right" from="#83FF9E" to="#64FFDA">
                                      a successful startup
                                      </Gradient> 
                                    </a>,{' '}

                                    built
                                    
                                    {' '}<a href="https:/www.mealful.ca">
                                      <Gradient dir="left-to-right" from="#83FF9E" to="#64FFDA">
                                        my own consumer foodtech startup
                                      </Gradient> 
                                    </a>,{' '} 
                                    
                                    bootstrapping it from $0 to $500k annualized GMV in just 8 months and taking it to the 
                                    
                                    {' '}<a href="https:/www.ycombinator.com">
                                      <Gradient dir="left-to-right" from="#83FF9E" to="#64FFDA">
                                        YCombinator
                                      </Gradient>
                                    </a>,{' '}
                                    
                                    semi-finals in San Francisco. 
                
            </p>

            <p>Here are a few technologies I’ve also worked with in the past:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jfif"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
