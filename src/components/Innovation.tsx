import { Activity, Smartphone, Database, Sparkles } from 'lucide-react';

export default function Innovation() {
  const features = [
    {
      icon: Activity,
      title: 'Predictive Healthcare',
      description: 'Real-time electrophysiology monitoring with AI-powered predictions',
    },
    {
      icon: Database,
      title: 'OMICS-Driven Diagnostics',
      description: 'Personalized health models using comprehensive OMICS data',
    },
    {
      icon: Smartphone,
      title: 'Non-Invasive Technology',
      description: "World's first non-invasive OMICS tracker with digital doctor assistant",
    },
    {
      icon: Sparkles,
      title: 'Ancient Meets Modern',
      description: 'Fusion of traditional pulse diagnostics with advanced sensors & deep learning',
    },
  ];

  return (
    <section
      id="innovation"
      className="relative py-20 bg-gradient-to-b from-black via-blue-950 to-black overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500 rounded-full filter blur-[200px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full filter blur-[200px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ----- TOP HEADER (Gap Reduced) ----- */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-6 py-2">
              <Sparkles size={20} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-wide">
                BREAKTHROUGH INNOVATION
              </span>
            </div>
          </div>

          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white">
            Introducing{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Docture-Poly™
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-4"></div>

          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The World's First Non-Invasive OMICS Tracker & Digital Doctor Assistant
          </p>

          <p className="text-xl text-blue-300 max-w-3xl mx-auto mt-4 italic">
            Inventing the Future of Life
          </p>
        </div>

        {/* ----- MAIN CONTENT (Gap Reduced) ----- */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-bold text-white">
                A Revolution in{' '}
                <span className="text-amber-400">Personalized Medicine</span>
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Docture-Poly™ represents a paradigm shift in healthcare delivery —
                transforming medicine from reactive to predictive, from generalized to personalized.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                This groundbreaking technology merges ancient pulse diagnostics with cutting-edge
                sensors and deep learning algorithms, creating an unprecedented platform for
                real-time health monitoring and disease prediction.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                By integrating OMICS data with advanced AI, Docture-Poly™ enables early detection,
                personalized treatment protocols, and continuous wellness optimization — shaping the
                future of global health.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://docture-poly.com/"
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 text-center"
              >
                Explore Docture-Poly™
              </a>

              <a
                href="#contact"
                className="border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-full font-semibold hover:bg-amber-500 hover:text-black transition-all duration-300 text-center"
              >
                Request Collaboration
              </a>
            </div>
          </div>

          {/* ----- IMAGE ----- */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="
                relative 
                w-[320px] md:w-[380px] lg:w-[420px] 
                rounded-2xl
                bg-white
                border-4 border-amber-400
                shadow-xl
                -mt--20
                overflow-hidden
              "
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src="dpimg.jpeg"
                  alt="Docture-Poly Device"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ----- FEATURES GRID ----- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={28} className="text-black" />
                </div>

                <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
