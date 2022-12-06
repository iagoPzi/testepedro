import styled from "styled-components";

const EarlyDetectionSection = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <ImageWrapper>
            <img src="/images/earlyDetectionBanner.webp" alt="" />
          </ImageWrapper>

          <TextWrapper>
            <h2>Advancing early detection and intervention</h2>

            <p>
              Development of neuropathology associated with Alzheimer’s Disease
              (AD) begins 15-20 years before overt symptoms, but the subtle
              changes in cognitive function during this preclinical phase often
              go undetected [1,2]. Even after symptoms present, diagnosis of AD
              and mild cognitive impairment is delayed or missed in nearly 2 out
              of 3 cases globally [3]. Delayed or missed diagnosis is associated
              with increased safety risks, higher rates of hospitalization and
              institutionalization, decreased survival rate, and increased
              caregiver burden [4,5].
            </p>

            <p>
              Earlier detection and intervention, particularly during the window
              of opportunity before disease progression, can improve outcomes
              [5,6]. Barriers to timely diagnosis include a lack of objective
              measures for assessing brain function, time and resource
              constraints, impractical screening methods, and knowledge gaps
              [7]. Similar constraints hinder effective ongoing monitoring to
              assess the impact of interventions to slow disease progression.
              Linus’ digital platform seeks to address these challenges so
              people can keep their brains healthier, longer.
            </p>
          </TextWrapper>
        </InnerContainer>
      </Container>
    </>
  );
};

export default EarlyDetectionSection;

const Container = styled.section`
  background: #e9f7fa;
  padding: 5rem 0;
`;

const InnerContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  gap: 2rem;


  @media (max-width: 980px){
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
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
