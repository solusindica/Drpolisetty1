import { Play, Sparkles, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Hero() {
    const navigate = useNavigate(); 
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-[#020617] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a1530] to-black opacity-90"></div>

     {/* <nav className="relative z-20 flex items-center justify-between px-6 md:px-10 lg:px-16 py-6">
        <div className="text-2xl md:text-3xl font-serif font-bold text-amber-400">
          Dr. Polisetty
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#innovation" className="hover:text-amber-400 transition-colors">Innovation</a>
          <a href="#vision" className="hover:text-amber-400 transition-colors">Vision</a>
          <a href="#founder" className="hover:text-amber-400 transition-colors">Founder</a>
          <a href="#thoughts" className="hover:text-amber-400 transition-colors">Thoughts</a>
          <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
          <a href="#awards" className="hover:text-amber-400 transition-colors">Awards</a>
          <a href="#publications" className="hover:text-amber-400 transition-colors">Publications</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>

        <button className="hidden lg:block bg-amber-500 text-black px-6 py-2.5 rounded-full font-semibold hover:bg-amber-400 transition-all">
          Connect
        </button>

        <button className="lg:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>*/}

      <div className="relative z-10 flex-1 flex items-center px-6 md:px-10 lg:px-16 pb-20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-amber-400/10 border border-amber-400/30 backdrop-blur-sm">
              <Sparkles size={18} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold">
                Where Science Becomes Possibility
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Dr.Ravishankar <br />
              <span className="text-amber-400">Polisetty</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 font-medium -mt-6">
              Visionary Surgeon | Scientific Innovator | Healthcare Futurist
            </p>

            <blockquote className="italic text-base md:text-lg text-gray-400 border-l-4 border-amber-400 pl-4 py-1 max-w-2xl leading-snug">

              Transforming human health by uniting Ancient Wisdom & Modern Science
              into a future where disease can be predicted, prevented, and reversed.
            </blockquote>


           <div className="flex flex-wrap gap-4 pt-0">
              <div  onClick={() => navigate("/patents")} className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-400/40  rounded-2xl px-6 py-4 min-w-[120px] hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-300 cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-amber-400">40+</div>
                <div className="text-gray-300 text-sm font-medium mt-1">Patents</div>
              </div>
              


              <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-400/40 rounded-2xl px-6 py-4 min-w-[120px] hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-amber-400">30+</div>
                <div className="text-gray-300 text-sm font-medium mt-1">Years Research</div>
              </div>

              <div  onClick={() => navigate("/publication")} className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-400/40 rounded-2xl px-6 py-4 min-w-[120px] hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-300 cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-amber-400">60+</div>
                <div className="text-gray-300 text-sm font-medium mt-1">Publications</div>
              </div>
            </div>

            <div className="space-y-0.5 pt-0 text-gray-300 text-sm md:text-base">
              <div className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✦</span>
                <p>Awarded by Dr APJ Abdul Kalam</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✦</span>
                <p>Vice-Chair (Precision Medicine), EICBI Brussels 2024</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✦</span>
                <p>Creator of Docture-Poly™ World's First Clinical Decision making Agent and Non-Invasive OMICS Tracker</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href="#about"
                className="bg-amber-500 text-black px-6 py-3 rounded-full text-base font-bold hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40"
              >
                Explore His Journey
              </a>

              <a
                href="https://docture-poly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-amber-500 text-amber-400 px-6 py-3 rounded-full text-base font-bold hover:bg-amber-500 hover:text-black transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30"
              >
                <Play size={18} />
                Meet Docture-Poly™
              </a>
            </div>
          </div>

         <div className="relative flex justify-center lg:justify-end">
  <div className="relative w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">

    {/* WHITE BACKGROUND WRAPPER */}
   <div className="rounded-[30px] border-[6px] border-amber-500 shadow-2xl shadow-amber-400/30">

   <div className="relative bg-white rounded-[24px] overflow-hidden">

        <img
          src="drprsimg.png"
          alt="Dr. Ravishankar Polisetty"
          className="w-full h-auto object-cover bg-white"
        />

        {/* TOP TAG */}
        <div className="absolute top-4 right-4 bg-black/70 text-amber-300 px-4 py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-md border border-amber-400/50 shadow-lg">
          Global Impact — 5 Continents
        </div>

        {/* BOTTOM TAG */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-blue-300 px-4 py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-md border border-blue-400/50 shadow-lg">
          30+ Years Translational Research
        </div>
      </div>
    </div>

  </div>
</div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-gray-300 hover:text-amber-400 transition-colors group"
        >
          <span className="text-xs font-medium mb-1 group-hover:text-amber-400">Discover More</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
