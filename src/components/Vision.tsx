import { Target, Compass, Lightbulb } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto italic">
            Healing Beyond Limits
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-3xl p-10 hover:border-amber-500/60 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} className="text-black" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Vision</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              A world where healthcare is <span className="text-amber-400 font-semibold">predictive rather than reactive</span>, and <span className="text-amber-400 font-semibold">personalized rather than generalized</span> — where ancient wisdom meets modern technology to prevent disease before it manifests.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-3xl p-10 hover:border-blue-500/60 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
              <Compass size={32} className="text-black" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Mission</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To integrate ancient medical wisdom with cutting-edge scientific technology, creating innovative solutions that empower individuals to take control of their health through <span className="text-blue-400 font-semibold">precision diagnostics, predictive analytics, and personalized treatment protocols</span>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-3xl p-10 hover:border-purple-500/60 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb size={32} className="text-black" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Impact</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Transforming global healthcare systems through translational research, medical device innovation, and knowledge dissemination — creating a future where <span className="text-purple-400 font-semibold">disease can be predicted, prevented, and reversed</span> for all of <span className="text-purple-400 font-semibold">humanity and empathy is institutionalized.</span>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-purple-500/10 border border-amber-500/30 rounded-3xl p-12 text-center">
          <blockquote className="font-serif text-3xl md:text-4xl text-white italic leading-relaxed mb-6">
  “The future of medicine shall be guided by three core principles:
  not merely treating disease, but preventing it before it begins;
  improving the quality of life for end-stage patients by transforming hospices into restorative care environments;
  and integrating innovative rule-based engines, advanced feature-extraction algorithms, AI and ML systems, and IoT-driven healthcare —
  all while honoring the wisdom of the past and embracing the innovations of tomorrow.”
</blockquote>

          <p className="text-amber-400 text-xl font-semibold">— Dr. Ravishankar Polisetty</p>
        </div>
      </div>
    </section>
  );
}
