import Banner from "../components/Banner";
import About from "../components/About";
import Success from "../components/Success";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Lingo Bingo</title>
      </Helmet>
      <Banner />
      <About />
      <Success />
      <Testimonials />
      <FAQ />
    </>
  );
}
