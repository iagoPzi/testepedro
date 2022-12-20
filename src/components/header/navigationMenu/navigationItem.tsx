import Link from "next/link";
import { CaretDown } from "phosphor-react";
import styled from "styled-components";

interface NavigationItemProps {
  title: string;
  subMenuLinks: [
    {
      link: string;
      name: string;
    }
  ];
}

const NavigationItem = ({ title, subMenuLinks }: NavigationItemProps) => {
  return (
    <>
      <Container>
        <Title>
          <p>{title}</p>
          <CaretDown />
        </Title>
        <SubMenuContainer>
          {subMenuLinks.map((link) => {
            return (
              <SubMenuItem key={link.name} href={link.link}>
                {link.name}
              </SubMenuItem>
            );
          })}
        </SubMenuContainer>
      </Container>
    </>
  );
};

export default NavigationItem;

const Container = styled.li`
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
  border-radius: 5px;

  position: absolute;
  background: #fff;
  top: 1.2rem;
  transition: opacity 1s ease-out;
  opacity: 0;
  height: 0;
  overflow: hidden;
  box-shadow: 0px 1rem 1rem 0px rgba(0, 0, 0, 0.068);

  ${Container}:hover & {
    opacity: 1;
    height: auto;
    padding: 1rem 0;
  }
`;

const SubMenuItem = styled(Link)`
  padding: 0.5rem 2rem;
  :hover {
    background: #e9f7fa;
  }
`;
