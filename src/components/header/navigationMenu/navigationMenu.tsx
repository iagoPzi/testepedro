import Link from "next/link";
import styled from "styled-components";
import NavigationItem from "./navigationItem";

const NavigationMenu = () => {
  const solutionsLinks = [
    {
      link: "/",
      name: "Healthcare Delivery",
    },
    {
      link: "/",
      name: "Research",
    },
  ];

  const resourcesLinks = [
    {
      link: "/",
      name: "All Resources",
    },
    {
      link: "/",
      name: "Blog",
    },
    {
      link: "/",
      name: "Scientific Publication",
    },
    {
      link: "/",
      name: "Advancing Cognitive Testing",
    },
  ];

  const companyLinks = [
    {
      link: "/",
      name: "About",
    },
    {
      link: "/",
      name: "Team",
    },
    {
      link: "/",
      name: "Press Releases",
    },
    {
      link: "/",
      name: "In The News",
    },
    {
      link: "/",
      name: "Careers",
    },
    {
      link: "/",
      name: "Contact",
    },
  ];

  return (
    <>
      <Container>
        <Link href="/">Our Approach</Link>
        <NavigationItem title="Solutions" subMenuLinks={solutionsLinks} />
        <NavigationItem title="Resources" subMenuLinks={resourcesLinks} />
        <NavigationItem title="Company" subMenuLinks={companyLinks} />
      </Container>
    </>
  );
};

export default NavigationMenu;

const Container = styled.ul`
  margin-left: 24px;
`;
