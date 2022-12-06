import Link from "next/link";
import styled from "styled-components";

const MainBanner = () => {
  return (
    <>
      <Container>
        <HeroContainer>
          <Hero src="/images/heroBanner.webp" alt="" />
          <TextContainer>
            <TextWrapper>
              <h1>Reshaping the brain health horizon™</h1>

              <p>
                Early detection and intervention are key to improving brain
                health. Linus is paving the way for more proactive, personalized
                care.
              </p>

              <LearnMoreButton href="/">Learn more</LearnMoreButton>
            </TextWrapper>
          </TextContainer>
        </HeroContainer>
      </Container>
    </>
  );
};

export default MainBanner;

//STYLED

const Container = styled.section``;

const HeroContainer = styled.div`
  background: url("/images/heroBanner.webp") center;
  background-size: cover;
  height: 36rem;

  /* display: grid;
  align-items: center; */
`;

const Hero = styled.img`
  width: 100%;
  display: none;
`;

const TextContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgba(233, 247, 250, 1) 40%,
    rgba(0, 0, 0, 0) 60%
  );
  height: 100%;
  display: grid;
`;

const TextWrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;

  h1 {
    max-width: 500px;
    font-size: 3.4rem;
    font-weight: 600;
    color: #0a7dae;
  }

  p {
    max-width: 500px;
    font-size: 1.25rem;
    line-height: 2rem;
  }
`;

const LearnMoreButton = styled(Link)`
  background: #87c65b;
  color: #fff;
  padding: 1rem 1.3rem;
  border-radius: 50px 0 50px 50px;
  font-weight: bold;

  transition: all 0.3s;

  :hover {
    background: #c9e7a0;
    color: #1b3d1a;
  }
`;
