import { Play, Sparkles, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero(): JSX.Element {
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToPatents = () => {
    navigate("/patents");
  };

  const goToPublication = () => {
    navigate("/publication");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#020617] text-white px-4 md:px-10 lg:px-16 py-6" // Reduced vertical padding here
    >
     {/* Gradient Background */}
<div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a1530] to-black opacity-90"></div>

<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start w-full -mt-10">
  {/* ================= LEFT SIDE ================= */}
  <div className="space-y-4">
    {/* Animated Badge */}
    <div className="inline-flex items-center gap-3 px-5 py-2 mt-2 rounded-full bg-amber-400/15 border border-amber-400/40 animate-fade-in-up">
      <Sparkles size={18} className="text-amber-400 animate-pulse" />
      <span className="text-amber-400 text-sm font-semibold">
        Where Science Becomes Possibility
      </span>
    </div>


          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-white">
  Dr.Ravishankar <br />
  <span className="text-amber-400">Polisetty</span>
</h1>


          {/* Subtitle */}
          <p className="text-lg md:text-base text-gray-300">
            Visionary Surgeon | Scientific Innovator | Healthcare Futurist
          </p>

          {/* Blockquote */}
          <blockquote className="italic text-base md:text-lg text-gray-400 border-l-4 border-amber-400 pl-5 max-w-lg leading-snug">
            Transforming human health by uniting Ancient Wisdom & Modern Science
            into a future where disease can be predicted, prevented, and reversed.
          </blockquote>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-3 pt-1">
            <button onClick={goToPatents}>
              <div className="bg-white/5 border border-amber-400/30 rounded-xl px-6 py-3 min-w-[110px]">
                <div className="text-2xl md:text-3xl font-bold text-amber-400">
                  40+
                </div>
                <div className="text-gray-400 text-sm md:text-base">Patents</div>
              </div>
            </button>

            <button onClick={goToPublication}>
              <div className="bg-white/5 border border-amber-400/30 rounded-xl px-6 py-3 min-w-[110px]">
                <div className="text-2xl md:text-3xl font-bold text-amber-400">
                  60+
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  Publications
                </div>
              </div>
            </button>

            <div className="bg-white/5 border border-amber-400/30 rounded-xl px-6 py-3 min-w-[110px]">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">
                30+
              </div>
              <div className="text-gray-400 text-sm md:text-base">Years Research</div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-1 pt-0 text-gray-400 text-sm md:text-base">
            <p>✨ Awarded by Dr APJ Abdul Kalam</p>
            <p>✨ Vice-Chair (Precision Medicine), EICBI Brussels 2024</p>
            <p>
              ✨ Creator of Docture-Poly™ World's First Clinical Decision making
              Agent and Non-Invasive OMICS Tracker
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-0 relative">
           <a
  href="#about"
  className="bg-amber-500 text-black px-4 py-2.5 rounded-full text-sm md:text-base font-semibold hover:bg-amber-400 transition-all"
>
  Explore His Journey
</a>

        <a
  href="https://saigangapanakeia.in/home/docturepoly"
  className="border border-amber-500 text-amber-400 px-4 py-2.5 rounded-full text-sm md:text-base font-semibold hover:bg-amber-500 hover:text-black transition-all flex items-center gap-2"
>
  <Play size={16} />
  Meet Docture-Poly™
</a>

          </div>

          {/* Discover More Button */}
          <div className="absolute bottom-[-36px] left-1/2 -translate-x-1/2 animate-bounce z-20">
            <button
              onClick={scrollToAbout}
              className="flex flex-col items-center text-gray-300 hover:text-amber-400 transition-colors"
            >
              <span className="text-xs mb-1">Discover More</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            className="
              relative 
              w-[280px] md:w-[340px] lg:w-[380px] 
              rounded-2xl
              bg-white
              -mt-20 /* moved up from mt-40 to mt-4 */
              border-4 border-amber-400
              shadow-xl
            "
          >
            <div className="rounded-xl overflow-hidden">
              <img
                src="drprsimg.png"
                alt="Dr. Ravishankar Polisetty"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tags */}
            <div className="absolute top-3 right-3 bg-black/50 text-amber-300 px-3 py-1 rounded-full text-sm backdrop-blur-md border border-amber-400/50">
              Global Impact — 5 Continents
            </div>
            <div className="absolute bottom-3 left-3 bg-black/50 text-blue-300 px-3 py-1 rounded-full text-sm backdrop-blur-md border border-blue-400/50">
              30+ Years Translational Research
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
