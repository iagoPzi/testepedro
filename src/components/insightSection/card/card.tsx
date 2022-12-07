import Link from "next/link";
import styled from "styled-components";

const Card = () => {
  return (
    <>
      <Container className="container">
        <ImageWrapper>
          <img src="/images/healthcareCard.jpeg" alt="" />
        </ImageWrapper>

        <TextWrapper>
          <h3>Healthcare Delivery</h3>

          <p>
            Coupling objective, quick, and scientifically-validated assessments
            with actionable recommendations for both providers and patients, the
            Linus Health platform helps healthcare organizations catch cognitive
            impairment early and efficiently; turn insights into action; and
            boost the bottom line.
          </p>

          <Link href="/">
            Learn more <span>⟶</span>
          </Link>
        </TextWrapper>
      </Container>
    </>
  );
};

export default Card;

const Container = styled.div`
  
  max-width: 320px;
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.2);
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const TextWrapper = styled.div`

  text-align: center;
  padding: 2rem;

  h3 {
    color: #024f70;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .container:hover p{
    color: red;
  }
`;
