import styled from "styled-components";
import Card from "./card/card";

const InsightSection = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <TextWrapper>
            <h2>Better brain health starts with actionable insights</h2>

            <p>
              The Linus Health digital platform—encompassing assessments,
              clinical decision support, care planning, and more—facilitates
              early detection of cognitive and brain health issues, empowers
              providers with actionable clinical recommendations, and supports
              individuals with personalized action plans. Our flexible,
              intuitive, and scientifically-validated digital solutions bring a
              new level of accessibility to brain health with far-reaching
              utility for healthcare providers, researchers, and senior care
              professionals.
            </p>
          </TextWrapper>
          <Card/>   
        </InnerContainer>
      </Container>
    </>
  );
};

export default InsightSection;

const Container = styled.section`
    padding: 2rem;
`;

const InnerContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TextWrapper = styled.div`

max-width: 680px;
text-align: center;
margin: 0 auto;


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

const CardsWrapper = styled.div``;
