import Head from "next/head";
import styled from "styled-components";
import EarlyDetectionSection from "../components/earlyDetectionSection/earlyDetection";
import Header from "../components/header/header";
import LearnAbout from "../components/learnAboutSection/learnAbout";
import MainBanner from "../components/mainBanner/mainBanner";
import { GlobalStyle } from "../GlobalStyle";

export default function Home() {
  return (

    <>
    <Head>
      <title>Linus Health | Home</title>
    </Head>


      <Container>
        <Header />
        <MainBanner />
        <LearnAbout />
        <EarlyDetectionSection />
      </Container>
      <GlobalStyle />
    </>
  );
}

export const Container = styled.header``;
