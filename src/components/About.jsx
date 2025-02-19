import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="about"
      className="py-16"
      data-aos="zoom-in"
      data-aos-duration="3000"
    >
      <div className="mx-auto w-11/12 max-w-screen-xl text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">About</h2>

        <p className="mb-8 text-justify text-lg">
          Lingo Bingo is your ultimate companion for learning new
          languages! Our app is designed to make expanding your vocabulary and
          improving communication skills in multiple languages fun, engaging,
          and effortless. We understand that retaining vocabulary can be one of
          the toughest challenges when learning a new language. That’s why Lingo
          Bingo is here to simplify the process. With an interactive approach
          and user-friendly design, we help you overcome this hurdle in an
          enjoyable way. Start your language-learning journey with just one
          click and discover how easy and exciting it can be to master new words
          and phrases. Let Lingo Bingo turn your language goals into
          achievements!
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-[#58cc02] p-6 text-white">
            <h3 className="text-2xl font-semibold">Interactive Lessons</h3>
            <p className="mt-2">
              Learn vocabulary with engaging tutorials and hands-on exercises.
            </p>
          </div>

          <div className="rounded-xl bg-[#58cc02] p-6 text-white">
            <h3 className="text-2xl font-semibold">Multilingual Support</h3>
            <p className="mt-2">
              Explore lessons in Hindi, Spanish, German, Japanese, and more.
            </p>
          </div>

          <div className="rounded-xl bg-[#58cc02] p-6 text-white">
            <h3 className="text-2xl font-semibold">Flexible Learning</h3>
            <p className="mt-2">
              Study at your own pace, anytime and anywhere. Our platform is
              accessible on any device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
