import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "hi";
  window.speechSynthesis.speak(utterance);
}

export default function Lesson() {
  const [lesson, setLesson] = useState([]);
  const { lesson_no } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    const newData = data.filter((item) => item.lesson_no == lesson_no);
    setLesson(newData);
  }, [data, lesson_no]);

  return (
    <section className="mx-auto w-11/12 max-w-screen-xl">
      <section className="mb-8 rounded-xl bg-[#58cc02] p-8">
        <h1 className="text-center text-4xl font-bold text-white">
          Lesson {lesson_no}
        </h1>
      </section>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {lesson.map((item) => (
          <div key={item.id} className="rounded-xl border p-2">
            <div
              onClick={() => pronounceWord(item.word)}
              className={`rounded-lg p-4 cursor-pointer ${
                item.difficulty === "easy"
                  ? "bg-green-500"
                  : item.difficulty === "medium"
                    ? "bg-yellow-500"
                    : item.difficulty === "hard"
                      ? "bg-red-500"
                      : ""
              }`}
            >
              <h2 className="text-center text-xl font-extrabold text-white">
                {item.word}
              </h2>
              <hr />
              <p className="text-center font-bold text-white">{item.meaning}</p>
            </div>
            <div className="p-4">
              <p className="text-center">
                <strong>Pronunciation:</strong> {item.pronunciation}
              </p>
              <p className="text-center">
                <strong>Part Of Speech:</strong> {item.part_of_speech}
              </p>
            </div>
            <button
              onClick={() =>
                document.getElementById(`modal_${item.id}`).showModal()
              }
              className="btn w-full bg-gray-100"
            >
              When to say
            </button>

            <dialog
              id={`modal_${item.id}`}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <div onClick={() => pronounceWord(item.word)}
                  className={`rounded-lg p-4 cursor-pointer ${
                    item.difficulty === "easy"
                      ? "bg-green-500"
                      : item.difficulty === "medium"
                        ? "bg-yellow-500"
                        : item.difficulty === "hard"
                          ? "bg-red-500"
                          : ""
                  }`}
                >
                  <h2 className="text-center text-xl font-extrabold text-white">
                    {item.word}
                  </h2>
                  <hr />
                  <p className="text-center font-bold text-white">
                    {item.meaning}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-center">
                    <strong>When to say</strong>
                  </p>
                  <p className="text-center">{item.when_to_say}</p>
                  <hr className="my-4" />
                  <p className="text-center">
                    <strong>Example</strong>
                  </p>
                  <p className="text-center">{item.example}</p>
                </div>
                <div className="modal-action w-full flex-col">
                  <form method="dialog">
                    <button className="btn w-full">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        ))}
      </section>
    </section>
  );
}
