import { FaQuoteLeft } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Saiful Hasan",
      feedback: "Lingo Bingo made learning Hindi so much fun and easy!",
    },
    {
      id: 2,
      name: "Rifat Shahriar",
      feedback:
        "The interactive lessons helped me improve my Spanish vocabulary quickly.",
    },
    {
      id: 3,
      name: "Riazul Haque",
      feedback: "A great app for language enthusiasts! Highly recommend it.",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="testimonials"
      className="py-16"
      data-aos="zoom-in"
      data-aos-duration="3000"
    >
      <div className="mx-auto w-11/12 max-w-screen-xl text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-xl border border-[#58cc02] bg-white p-6"
            >
              <p className="italic">{testimonial.feedback}</p>
              <h4 className="mt-4 text-lg font-semibold">{testimonial.name}</h4>
              <div className="absolute -left-2 -top-2 z-10 rounded-full border bg-[#58cc02] p-1 text-2xl text-white">
                <FaQuoteLeft />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
