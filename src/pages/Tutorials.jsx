import { Link } from "react-router-dom";

export default function Tutorials() {
  return (
    <section className="mx-auto w-11/12 max-w-screen-xl pb-16">
      <section className="mb-8 rounded-xl bg-[#58cc02] p-8">
        <h1 className="text-center text-4xl font-bold text-white">Tutorials</h1>
      </section>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <iframe
            width="100%"
            className="aspect-video rounded-xl"
            src="https://www.youtube.com/embed/gHBJcPd46Do?si=D4U5DNTe3RmqklCt"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="100%"
            className="aspect-video rounded-xl"
            src="https://www.youtube.com/embed/Yvb3we9HMFo?si=7L3PZ7yB8hgH4Nhz"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="100%"
            className="aspect-video rounded-xl"
            src="https://www.youtube.com/embed/QHVe6IWgQfU?si=CGWLRu_rTlDGKTS7"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="100%"
            className="aspect-video rounded-xl"
            src="https://www.youtube.com/embed/ZserGZdbFpo?si=7uFQl7ICnQ7GnUA8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="100%"
            className="aspect-video rounded-xl"
            src="https://www.youtube.com/embed/l-B22lPrGTo?si=l6-_sYz5vHxB-mCt"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="100%"
            className="aspect-video rounded-xl"
            src="https://www.youtube.com/embed/G5AGSx7aK_s?si=gS8tRWQsoOQHQmU4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section className="pt-8 text-center">
        <Link to="/startLearning" className="btn btn-wide text-lg text-white bg-[#58cc02]">Learn Vocabularies</Link>
      </section>
    </section>
  );
}
