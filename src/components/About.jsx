const About = () => {
  return (
    <section id="about" className="px-6 py-16">
      <div className="mx-auto w-11/12 max-w-screen-xl text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          About Lingo Bingo
        </h2>

        <p className="mb-8 text-center">
          Lingo Bingo is a fun and interactive platform
          designed to make learning new languages engaging and accessible. We
          focus on building vocabulary through practical lessons, interactive
          tutorials, and innovative features, helping users connect with the
          world, one word at a time.
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
