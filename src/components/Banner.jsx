export default function Banner() {
  const slides = [
    {
      id: "slide1",
      text: "Unlock the World Through Languages!",
      imgSrc: "../src/assets/slide1.svg",
      prev: "slide3",
      next: "slide2",
    },
    {
      id: "slide2",
      text: "Master Vocabulary, Master Communication!",
      imgSrc: "../src/assets/slide2.svg",
      prev: "slide1",
      next: "slide3",
    },
    {
      id: "slide3",
      text: "Learn Anytime, Anywhere!",
      imgSrc: "../src/assets/slide3.svg",
      prev: "slide2",
      next: "slide1",
    },
  ];

  return (
    <section className="mx-auto w-11/12 max-w-screen-xl pb-8">
      <div className="carousel w-full">
        {slides.map(({ id, text, imgSrc, prev, next }) => (
          <div key={id} id={id} className="carousel-item relative w-full">
            <div className="grid w-full items-center gap-8 rounded-xl bg-[#58cc02] p-6 sm:p-8 md:grid-cols-2 md:p-12 lg:p-16 xl:p-20">
              <p className="text-center text-2xl font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {text}
              </p>
              <img src={imgSrc} alt={text} className="max-h-[400px]" />
            </div>
            <div className="absolute bottom-0 left-5 right-5 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#${prev}`}
                className="btn btn-circle border-0 bg-transparent text-white hover:bg-[#89e219]"
                aria-label="Previous Slide"
              >
                ❮
              </a>
              <a
                href={`#${next}`}
                className="btn btn-circle border-0 bg-transparent text-white hover:bg-[#89e219]"
                aria-label="Next Slide"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
