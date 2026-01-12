import { Heart, Dna, Brain, Globe2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate(); // ✅ REQUIRED for navigation

  const expertise = [
    {
      icon: Heart,
      title: 'Regenerative Medicine',
      description: 'Pioneering heart tissue regeneration in Post-MI models',
      route: '/regenerative-medicine', // ✅ ONLY this card navigates
    },
    {
      icon: Dna,
      title: 'Biomedical Device Engineering',
      description: 'Clinical research & OMICS-driven innovation',
      route: '/biomedical-device-engineering',
    },
    {
      icon: Brain,
      title: 'AI & Deep Learning',
      description: 'Digital health data intelligence & predictive analytics',
      route:'/ai-deep-learning',
    },
    {
      icon: Globe2,
      title: 'Integrative Medicine',
      description: 'Ayurveda integration with precision systems biology',
      route: '/integrative-medicine',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Where Science Becomes Possibility
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-2"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Regenerative Health Quantified
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-2 mb-10">

          {/* LEFT TEXT */}
          <div className="space-y-5">
            <h3 className="font-serif text-3xl font-bold text-white mb-2">
              A Global Pioneer in{' '}
              <span className="text-amber-400">Cardiovascular Excellence</span>
            </h3>

            <p className="text-gray-300 leading-relaxed text-base">
              Dr. Ravishankar Polisetty is an internationally respected
              cardiovascular surgeon, scientific innovator, and translational
              research leader with a distinguished global career spanning India,
              Russia, Europe, Canada, and the United States.
            </p>

            <p className="text-gray-300 leading-relaxed text-base">
              He pioneered heart tissue regeneration in Post-MI models, integrates
              Scientific Ayurveda with precision systems biology, and has shaped
              global medical science through clinical research, AI-powered
              healthcare engineering, and device-level innovations.
            </p>

            <p className="text-gray-300 leading-relaxed text-base">
              With 4 patented innovations, 29 patent filings, and over 60
              publications, Dr. Polisetty stands at the forefront of medical
              innovation, serving as a keynote speaker worldwide and advisor to
              governments, universities, and industries.
            </p>

            <div className="pt-5">
              <a
                href="https://docture-poly.com/"
                className="inline-block bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-7 py-3 rounded-full text-sm font-semibold hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
              >
                Explore His Innovations
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="
                relative
                w-[320px] md:w-[380px] lg:w-[420px]
                rounded-2xl
                bg-white
                border-4 border-amber-400
                shadow-xl
                overflow-hidden
              "
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src="drprs2.png"
                  alt="Dr. Ravishankar Polisetty"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* IMAGE CAPTION */}
          <div className="text-center mt-4 translate-x-80">
            <p className="text-xl font-serif font-bold text-amber-400 mb-1">
              Dr. Ravishankar Polisetty
            </p>
            <p className="text-sm text-gray-400 italic">
              Professional Portrait
            </p>
          </div>
        </div>

        {/* EXPERTISE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() => item.route && navigate(item.route)}
                className={`relative bg-white/5 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-7
                  hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300 group
                  ${item.route ? 'cursor-pointer' : ''}`}
              >
                {/* ===== Yellow line at the top ===== */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-t-2xl"></div>

                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-black" />
                </div>

                <h4 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
