import Link from "next/link";
import styled from "styled-components";

const LearnMoreSection = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <TextWrapper>
            <h2>Learn more</h2>
            <p>
              Let’s talk about how Linus can help you transform your approach to
              brain health.
            </p>

            <RequestInfoButton href="/">Request information</RequestInfoButton>
          </TextWrapper>
        </InnerContainer>
      </Container>
    </>
  );
};

export default LearnMoreSection;

const Container = styled.section`
  background: #e9f7fa;
padding: 2rem;
`;

const InnerContainer = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TextWrapper = styled.div`

    display: grid;
    place-items: center;
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

const RequestInfoButton = styled(Link)`
  background: #87c65b;
  color: #fff;
  padding: 0.8rem 2.4rem;
  border-radius: 50px 0 50px 50px;
  font-weight: bold;

  transition: all 0.3s;

  :hover {
    background: #c9e7a0;
    color: #1b3d1a;
  }
`;
