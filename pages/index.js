import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";



export default function Home() {
  return (
    <>
      <Head>
        <title>lavalink.host</title>
        <meta
          name="description"
          content="lavalink.host is a free lavalink server hosting service. We provide lavalink servers for everyone."
        />
         <link rel="icon" href="/black.png" /> 
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Main Benefits"
        title="Why should you use lavalink.host?">
        Our aim is to provide the best possible experience for our users who're looking for a best price per performance ratio lavalink hosting, available for all types of users.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to get started with lavalink">
        more of a visual learner? Watch a video on how to use lavalink.host.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="People"
        title="Here's what our people reiews">
        reviews from our long term & known people.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Frequently asked questions about us.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
