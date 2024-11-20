import { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is Lingo Bingo?",
      answer:
        "Lingo Bingo is an interactive platform designed to make vocabulary learning fun and engaging across multiple languages.",
    },
    {
      id: 2,
      question: "Which languages can I learn?",
      answer:
        "You can learn languages like Hindi, Spanish, French, German, Japanese, Arabic, and many more!",
    },
    {
      id: 3,
      question: "Is Lingo Bingo free to use?",
      answer:
        "Yes! The entire platform is free to use, with no hidden fees or subscriptions.",
    },
    {
      id: 4,
      question: "How do I track my progress?",
      answer:
        "Your progress is tracked automatically when you're logged in. You can view your stats on your profile page.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="py-16">
      <div className="mx-auto w-11/12 max-w-screen-xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="cursor-pointer rounded-lg border border-[#58cc02] bg-white p-4 transition-all duration-300"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span
                  className={`transform text-gray-500 transition-transform duration-300 ${
                    openFAQ === faq.id ? "rotate-180" : ""
                  }`}
                >
                  ⌵
                </span>
              </div>
              <div
                className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === faq.id
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
