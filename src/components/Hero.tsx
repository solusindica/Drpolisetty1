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
      className="relative min-h-screen flex items-center bg-[#020617] text-white px-4 md:px-10 lg:px-16 py-14"
    >
      {/* YOUR EXISTING JSX CONTENT */}


{/*export default function Hero() {

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#020617] text-white px-4 md:px-10 lg:px-16 py-14"
    >*/}
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a1530] to-black opacity-90"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">

        {/* ================= LEFT SIDE ================= */}
        <div className="space-y-3">

          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mt-2 rounded-full bg-amber-400/10 border border-amber-400/30 animate-fade-in-up">
            <Sparkles size={12} className="text-amber-400 animate-pulse" />
            <span className="text-amber-400 text-[11px] font-medium">
              Where Science Becomes Possibility
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white">
            Dr.Ravishankar <br />
            <span className="text-amber-400">Polisetty</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-sm text-gray-300">
            Visionary Surgeon | Scientific Innovator | Healthcare Futurist
          </p>

          {/* Blockquote */}
          <blockquote className="italic text-sm text-gray-400 border-l-4 border-amber-400 pl-3">
            Transforming human health by uniting Ancient Wisdom & Modern Science
            into a future where disease can be predicted, prevented, and reversed.
          </blockquote>

          {/* Stats Row */}
           <div className="flex flex-wrap gap-3 pt-1">
          <button onClick={goToPatents} >   <div className="bg-white/5 border border-amber-400/30 rounded-xl px-4 py-2">
              <div className="text-xl font-bold text-amber-400">40+</div>
              
           <div className="text-gray-400 text-[11px]">Patents</div>
            </div></button>

            <button onClick={goToPublication} ><div className="bg-white/5 border border-amber-400/30 rounded-xl px-4 py-2">
              <div className="text-xl font-bold text-amber-400">60+</div>
                <div className="text-gray-400 text-[11px]">Publications</div>
            </div></button>

            <div className="bg-white/5 border border-amber-400/30 rounded-xl px-4 py-2">
              <div className="text-xl font-bold text-amber-400">30+</div>
              <div className="text-gray-400 text-[11px]">Years Research</div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-1 pt-0 text-gray-400 text-xs">
            <p>✨ Awarded by Dr APJ Abdul Kalam</p>
            <p>✨ Vice-Chair (Precision Medicine), EICBI Brussels 2024</p>
            <p>✨ Creator of Docture-Poly™ World's First Clinical Decision making Agent and Non-Invasive OMICS Tracker</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-0 relative">
            <a
              href="#about"
              className="bg-amber-500 text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-amber-400 transition-all"
            >
              Explore His Journey
            </a>
   <a
  href="https://saigangapanakeia.in/home/docturepoly"
  className="border border-amber-500 text-amber-400 px-5 py-2.5 rounded-full text-sm font-medium
             hover:bg-amber-500 hover:text-black transition-all
             flex items-center gap-1.5"
>
  <Play size={16} />
  Meet Docture-Poly™
</a>



           
          </div>
        </div>
         {/* Discover More Button */}
            <div className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 animate-bounce z-20">
              <button
                onClick={scrollToAbout}
                className="flex flex-col items-center text-gray-300 hover:text-amber-400 transition-colors"
              >
                <span className="text-[10px] mb-1">Discover More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative flex justify-center lg:justify-end">

          {/* IMAGE CARD */}
          <div
            className="
              relative 
              w-[230px] md:w-[280px] lg:w-[320px] 
              rounded-2xl
              bg-white
              -mt--80
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

            {/* Tag Top-Right */}
            <div
              className="absolute top-2 right-2 
                bg-black/40 text-amber-300 
                px-2.5 py-0.5 rounded-full text-[10px] backdrop-blur-md
                border border-amber-400/40"
            >
              Global Impact — 5 Continents
            </div>

            {/* Tag Bottom-Left */}
            <div
              className="absolute bottom-2 left-2 
                bg-black/40 text-blue-300 
                px-2.5 py-0.5 rounded-full text-[10px] backdrop-blur-md
                border border-blue-400/40"
            >
              30+ Years Translational Research
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
