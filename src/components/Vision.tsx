import { Target, Compass, Lightbulb } from "lucide-react";

export default function Vision(): JSX.Element {
  return (
    <section
      id="vision"
      className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto italic">
            Healing Beyond Limits
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">

          {/* Vision */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-3xl p-10 hover:border-amber-500/60 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} className="text-black translate-x-[1px] translate-y-[1px]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Vision
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              A world where healthcare is{" "}
              <span className="text-amber-400 font-semibold">
                predictive rather than reactive
              </span>
              , and{" "}
              <span className="text-amber-400 font-semibold">
                personalized rather than generalized
              </span>
              — where ancient wisdom meets modern technology to prevent disease
              before it manifests.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-3xl p-10 hover:border-blue-500/60 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
              <Compass size={32} className="text-black translate-x-[1px] translate-y-[1px]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Mission
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To integrate ancient medical wisdom with cutting-edge scientific
              technology, empowering individuals through{" "}
              <span className="text-blue-400 font-semibold">
                precision diagnostics, predictive analytics, and personalized
                treatment protocols
              </span>
              .
            </p>
          </div>

          {/* Impact */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-3xl p-10 hover:border-purple-500/60 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb size={32} className="text-black translate-x-[1px] translate-y-[1px]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Impact
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Transforming global healthcare through translational research,
              medical device innovation, and knowledge dissemination — creating a
              future where{" "}
              <span className="text-purple-400 font-semibold">
                disease can be predicted, prevented, and reversed
              </span>{" "}
              with empathy institutionalized.
            </p>
          </div>
        </div>

        {/* ================= PREMIUM QUOTE ================= */}
        <div className="relative max-w-4xl mx-auto mt-10">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-amber-500/40 blur-2xl opacity-70"></div>

  <div
  className="
    relative
    bg-gradient-to-br from-gray-900/90 to-black/90
    border border-purple-500/30
    rounded-3xl
    p-10 md:p-12
    backdrop-blur-xl

    hover:shadow-[0_0_90px_rgba(139,92,246,0.45)]
    hover:border-purple-400/70
    transition-all duration-500
  "
>

 <div className="text-purple-400 text-6xl mb-6 font-serif leading-none">
              “”
            </div>

            <blockquote className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed space-y-6">
              <p>
                The future of medicine shall be guided by three core principles:
              </p>

              <p>
                <span className="text-amber-400 font-semibold">
                  Preventive Care
                </span>{" "}
                — preventing disease before it begins.
              </p>

              <p>
                <span className="text-amber-400 font-semibold">
                  Improving Quality of Life
                </span>{" "}
                — transforming end-stage care into restorative healing
                environments.
              </p>

              <p>
                <span className="text-amber-400 font-semibold">
                  Technology-Integrated Healthcare
                </span>{" "}
                — AI, ML, IoT, and advanced clinical intelligence.
              </p>

              <p className="text-gray-300">
                Honoring the wisdom of the past while embracing the innovations
                of tomorrow.
              </p>
            </blockquote>

            <div className="mt-8 w-32 h-1 bg-gradient-to-r from-purple-400 to-amber-400 rounded-full mx-auto"></div>

            <p className="mt-6 text-amber-400 text-xl font-semibold text-center">
              — Dr. Ravishankar Polisetty
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
