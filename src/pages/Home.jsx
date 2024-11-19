import Banner from "../components/Banner";
import About from "../components/About";
import Success from "../components/Success";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <section>
      <Banner />
      <About/>
      <Success />
      <Testimonials />
    </section>
  );
}
