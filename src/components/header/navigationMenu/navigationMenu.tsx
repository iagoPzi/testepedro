import styled from "styled-components";
import NavigationItem from "./navigationItem";

const NavigationMenu = () => {
  return (
    <>
      <Container>
        <li>Our Approach</li>
        <NavigationItem />
        <li>Resources</li>
        <li>Company</li>
      </Container>
    </>
  );
};

export default NavigationMenu;

const Container = styled.ul``;
