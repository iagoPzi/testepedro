import { List } from "phosphor-react";
import styled from "styled-components";
import MobileNavigation from "./mobileNavigation";

const MenuHamburguer = () => {
  return (
    <>
      <Container>
        <MenuIcon />
        <MobileNavigation />
      </Container>
    </>
  );
};

export default MenuHamburguer;

const Container = styled.div`
  margin-left: auto;
  position: relative;

  @media (min-width: 1280px) {
    display: none;
  }
`;

const MenuIcon = styled(List)`
  cursor: pointer;
  font-size: 1.5rem;
`;
