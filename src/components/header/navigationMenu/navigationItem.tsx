import { CaretDown } from "phosphor-react";
import styled from "styled-components";

const NavigationItem = () => {
  return (
    <>
      <Container>
        <Title>
          <p>Solutions</p>
          <CaretDown />
        </Title>
        <SubMenuContainer>
          {/* <ul> */}
            <li>teste</li>
            <li>teste</li>
          {/* </ul> */}
        </SubMenuContainer>
      </Container>
    </>
  );
};

export default NavigationItem;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    transition: rotate 0.3s;
    ${Container}:hover & {
      rotate: 180deg;
    }
  }
`;

const SubMenuContainer = styled.div`
display: flex;
flex-direction: column;

  position: absolute;
  background: #00000042;
  top: 1rem;
  transition: opacity 1s ease-out;
  opacity: 0;
  height: 0;
  overflow: hidden;

  ${Container}:hover & {
    opacity: 1;
    height: auto;
  }
`;
