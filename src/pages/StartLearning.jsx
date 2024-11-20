import { Link } from "react-router-dom";

export default function StartLearning() {
  const lessons = Array.from({ length: 10 }, (_, index) => [index + 1]);

  return (
    <section className="mx-auto w-11/12 max-w-screen-xl pb-16">
      <section className="mb-8 rounded-xl bg-[#58cc02] p-8">
        <h1 className="text-center text-4xl font-bold text-white">
          Start Learning
        </h1>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Lessons</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {lessons.map((lesson) => (
            <Link
              key={lesson}
              to={`/lesson/${lesson}`}
              className="flex items-center justify-center rounded-lg border border-[#89e219] p-6 transition duration-300 ease-in-out hover:bg-[#89e219] active:scale-95"
            >
              <h2 className="text-xl font-medium text-gray-800">
                Lesson {lesson}
              </h2>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold">Tutorial</h2>
        <div className="flex w-full flex-col items-center justify-center rounded-xl">
          <iframe
            className="aspect-video max-w-[560px] rounded-xl"
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/ihPGjbzWZME?si=7cabOM3UEFlroQza"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link
            to="/tutorials"
            className="btn btn-wide mt-4 bg-[#89e219] text-lg font-bold"
          >
            View More
          </Link>
        </div>
      </section>
    </section>
  );
}
