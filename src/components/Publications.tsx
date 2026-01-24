import { useState } from "react";
import { Video, ChevronLeft, ChevronRight } from "lucide-react";

export default function Publications() {
  const videos = [
      {
      title: "I-PRISM course with IIT Hyderabad",
      description: "Translational Research & Innovation Education",
      url: "https://www.youtube.com/embed/RZ-o6DgudD0",
    },
    {
      title: "I-PRISM Paradigm in T-Hub in Hyderabad",
      description: "Translational Research & Innovation Education",
      url: "https://www.youtube.com/embed/t206V62iJas",
    },
    {
      title: "Health Care",
      description: "Uses of AI in Medical field",
      url: "https://www.youtube.com/embed/NJzEEl8eXiE",
    },
    {
      title: "Health Care",
      description: "ANTIMICRO Resistance",
      url: "https://www.youtube.com/embed/5Czj7m2VBOg",
    },
    {
      title: "Britan Parlament ",
      description: "Talking about Ayurveda in Britan Parlament",
      url: "https://www.youtube.com/embed/AjGmK4qOvQI",
    },
    {
      title: "Health Care",
      description: "What is PolyScientific Advanced Medicine ",
      url: "https://www.youtube.com/embed/nFAy0hCtmVI",
    },
    {
      title: "Docture Poly",
      description: "Medical Miracle DocturePoly",
      url: "https://www.youtube.com/embed/3FIS1wHybEQ",
    },
    {
      title: "Docture Poly",
      description: "Your Doctor in your hand",
      url: "https://www.youtube.com/embed/Sqjtm4kc-Kg",
    },
    {
      title: "Autism problem in Childern",
      description: "Health Care",
      url: "https://www.youtube.com/embed/jcHLcypF3CI",
    },
    {
      title: "PolyScientific Ayurveda",
      description: "Why should you know about PRISM",
      url: "https://www.youtube.com/embed/LlU6DoLGmaI",
    },
    {
      title: "Scientific Ayurveda",
      description: "Ayurveda Explained Scientifically",
      url: "https://www.youtube.com/embed/Hn4BORE-Knw",
    },
    {
      title: "AI in Medicine",
      description: "Is there any problem with AI in Medical Field",
      url: "https://www.youtube.com/embed/x6YfT-67cts",
    },
    {
      title: "AI in Medical Field",
      description: "Uses of AI in Medical Field",
      url: "https://www.youtube.com/embed/b6L_H15u2aU",
    },
    {
      title: "PolyScientific Ayurveda",
      description: "Exclusive Interview with DR.Ravishankar Polisetty",
      url: "https://www.youtube.com/embed/x_6j32cdZHM",
    },
    {
      title: "Dr.Polisetty Suggestions",
      description: "Information about Oil",
      url: "https://www.youtube.com/embed/BltNbrPb1p4",
    },
    {
      title: "Dr.Ravishankar Polisetty",
      description: "DocturePoly Innovation and Research",
      url: "https://www.youtube.com/embed/_eO8ZcWscOo",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;
  const cardWidth = 320;
  const gap = 24;

  const maxIndex = videos.length - visibleCount;

  const goLeft = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const goRight = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section
      id="publications"
      className="relative bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-indigo-900/40
      border border-blue-500/30 rounded-3xl p-12 mb-20 overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <Video size={64} className="text-amber-400 mx-auto mb-6" />
        <h3 className="font-serif text-4xl font-bold text-white mb-4">
          Watch Dr. Polisetty's Keynote Talks
        </h3>
        <p className="text-gray-300 text-lg">
          Explore groundbreaking insights on the future of healthcare, AI in
          medicine, and translational research
        </p>
      </div>

      {/* OUTER carousel wrapper (for arrows like 2nd image) */}
      <div className="relative flex items-center justify-center">

        {/* LEFT ARROW — outside cards */}
      <button
          onClick={goLeft}
          disabled={currentIndex === maxIndex}
          className={`absolute -left-0 top-[40%] -translate-y-1/2 z-20
          w-12 h-12 rounded-full flex items-center justify-center
          transition-all
          ${
            currentIndex === maxIndex
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-amber-500 hover:bg-amber-600"
          }`}
        >
          <ChevronLeft className="text-black" />
        </button>

        {/* VIEWPORT */}
        <div
          className="overflow-hidden"
          style={{
            width:
              cardWidth * visibleCount + gap * (visibleCount - 1),
          }}
        >
          {/* TRACK */}
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (cardWidth + gap)
              }px)`,
            }}
          >
            {videos.map((video, index) => (
              <div key={index} className="flex-none w-80">
                <div className="aspect-video rounded-xl overflow-hidden
                border border-amber-500/20 hover:border-amber-500/50 transition">
                  <iframe
                    className="w-full h-full"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <h4 className="mt-4 text-white font-semibold">
                  {video.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW — outside cards */}
        <button
          onClick={goRight}
          disabled={currentIndex === maxIndex}
          className={`absolute -right-0 top-[40%] -translate-y-1/2 z-20
          w-12 h-12 rounded-full flex items-center justify-center
          transition-all
          ${
            currentIndex === maxIndex
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-amber-500 hover:bg-amber-600"
          }`}
        >
          <ChevronRight className="text-black" />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex
                ? "bg-amber-500 scale-125"
                : "bg-gray-500"
            }`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500
          text-black px-8 py-4 rounded-full font-semibold
          hover:shadow-xl hover:shadow-amber-500/40 transition"
        >
          Access Full Research Portfolio
        </a>
      </div>
    </section>
  );
}