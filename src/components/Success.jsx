import CountUp from "react-countup";
export default function Success() {
  return (
    <section className="mx-auto w-11/12 max-w-screen-xl py-8">
      <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
        Success
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center rounded-xl border border-[#58cc02] p-6">
          <h3 className="text-3xl font-bold text-[#58cc02]">
            <CountUp end={10000} suffix="+" />
          </h3>
          <p className="text-lg font-semibold">Users</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl border border-[#58cc02] p-6">
          <h3 className="text-3xl font-bold text-[#58cc02]">
            <CountUp end={300} suffix="+" />
          </h3>
          <p className="text-lg font-semibold">Lessons</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl border border-[#58cc02] p-6">
          <h3 className="text-3xl font-bold text-[#58cc02]">
            <CountUp end={20000} suffix="+" />
          </h3>
          <p className="text-lg font-semibold">Vocabularies</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl border border-[#58cc02] p-6">
          <h3 className="text-3xl font-bold text-[#58cc02]">
            <CountUp end={100} suffix="+" />
          </h3>
          <p className="text-lg font-semibold">Tutorials</p>
        </div>
      </div>
    </section>
  );
}
