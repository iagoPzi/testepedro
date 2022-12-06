import Link from "next/link";
import styled from "styled-components";

const LearnAbout = () => {
  return (
    <>
      <Container>
        <TextWrapper>
          <h2>
            Changing the way we measure, monitor, and maintain brain health
          </h2>

          <p>
            Linus Health is dedicated to transforming brain health for people
            across the world by advancing how we detect and address cognitive
            and brain disorders. Leveraging cutting-edge neuroscience, clinical
            expertise, and artificial intelligence, our goal is to enable a
            future where people can live longer, happier, and healthier lives
            with better brain health. Our digital platform—combining robust
            assessments with actionable recommendations—is paving the way for
            earlier detection and more personalized interventions to reshape the
            future of brain health the world over.
          </p>

          <LearnAboutButton href="/">Learn about our platform</LearnAboutButton>
        </TextWrapper>
      </Container>
    </>
  );
};

export default LearnAbout;

const Container = styled.section`
    padding: 4rem 1rem;
`;

const TextWrapper = styled.section`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 2.75rem;
    color: #0a7dae;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const LearnAboutButton = styled(Link)`

  color: #087dae;
  border: 2px solid #087dae;
  border-radius: 5rem;
  padding: 1rem 1.5rem;
  font-weight: 600;

  :hover{
    background: #e9f7fa;
  }
`;
