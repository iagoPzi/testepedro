import Head from "next/head";
import styled from "styled-components";
import EarlyDetectionSection from "../components/earlyDetectionSection/earlyDetection";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import InsightSection from "../components/insightSection/insightSection";
import LearnAbout from "../components/learnAboutSection/learnAbout";
import LearnMoreSection from "../components/learnMoreSection/learnMoreSection";
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
        <InsightSection />
        <LearnMoreSection />
        <Footer />
        
      </Container>
      <GlobalStyle />
    </>
  );
}

export const Container = styled.header``;
