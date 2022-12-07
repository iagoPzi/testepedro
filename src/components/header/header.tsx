import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import NavigationLink from "./navigationLink/navigationLink";

const Header = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <Logo href="#">
            <Image
              src="/linusHealthLogo.svg"
              alt="Linus health logo"
              width={127}
              height={40}
            />
          </Logo>

          <NavLink>
            <ul>
              <li>Our Approach</li>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Company</li>
            </ul>
          </NavLink>

          <MenuWrapper>
            <Link href="/">Sign in</Link>
            <RequestInfoButton href="/">Request info</RequestInfoButton>
          </MenuWrapper>
          {/* <NavigationLink /> */}
        </InnerContainer>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.nav`
  height: 5.5rem;
  display: flex;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 1180px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  align-items: center;
`;

const Logo = styled.a`
  display: grid;
`;



const NavLink = styled.div`
  ul {
    display: flex;

    li {
      padding: 0 0.75rem;
    }
  }

  @media (max-width: 1280px) {
    display: none;
  }
`;



const MenuWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1280px) {
    display: none;
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
