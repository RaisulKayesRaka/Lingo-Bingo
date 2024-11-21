import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Success() {
  const stats = [
    {
      id: 1,
      title: "Users",
      value: 10000,
    },
    {
      id: 2,
      title: "Lessons",
      value: 300,
    },
    {
      id: 3,
      title: "Vocabularies",
      value: 20000,
    },
    {
      id: 4,
      title: "Tutorials",
      value: 100,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="mx-auto w-11/12 max-w-screen-xl py-16"
      data-aos="zoom-in"
      data-aos-duration="3000"
    >
      <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
        Success
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center rounded-xl border border-[#58cc02] p-6"
          >
            <h3 className="text-3xl font-bold text-[#58cc02]">
              <CountUp end={stat.value} suffix="+" />
            </h3>
            <p className="text-lg font-semibold">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
