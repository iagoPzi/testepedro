import { CaretDown } from "phosphor-react";
import styled from "styled-components";

const MobileNavigation = () => {
  return (
    <>
      <Container>
        <LinksContainer>
          <li>Our Approach</li>
          <li>
            Solutions <CaretIcon weight="bold" />
          </li>
          <li>
            Resources <CaretIcon weight="bold" />
          </li>
          <li>
            Company <CaretIcon weight="bold" />
          </li>
        </LinksContainer>
        <ButtonsContainer>
          <SignInButton>Sing in</SignInButton>
          <RequestInfoButton>Request info</RequestInfoButton>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default MobileNavigation;

const Container = styled.div`
  width: 580px;
  height: 366px;
  background: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0.125rem 0.75rem 2rem hsla(240, 1%, 64%, 0.3);

  position: absolute;
  right: 0;
  top: 5.5rem;
`;

const LinksContainer = styled.ul`
  li {
    border-bottom: 1px solid rgba(0, 108, 163, 0.35);
    font-weight: 600;
    font-size: 1.2rem;
    padding: 12px 0;

    display: flex;
    justify-content: space-between;
  }
`;

const CaretIcon = styled(CaretDown)`
  font-size: 24px;
`;

const ButtonsContainer = styled.div``;

const SignInButton = styled.button``;

const RequestInfoButton = styled.button`
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
