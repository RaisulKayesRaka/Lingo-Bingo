import Banner from "../components/Banner";
import About from "../components/About";
import Success from "../components/Success";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <section>
      <Banner />
      <About />
      <Success />
      <Testimonials />
      <FAQ />
    </section>
  );
}
