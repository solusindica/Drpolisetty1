import { Tv, Newspaper, Radio } from 'lucide-react';

export default function Media() {
  const mediaLogos = [
    'BBC News',
    'CNN Health',
    'Forbes',
    'The Times',
    'Nature Medicine',
    'The Lancet',
    'MIT Technology Review',
    'Scientific American',
  ];

  return (
    <section id="media" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Media Presence & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Featured in leading global media outlets and scientific publications
          </p>
        </div>

       

        <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-3xl p-12 mb-12">
          <h3 className="font-serif text-3xl font-bold text-white text-center mb-12">
            Featured In
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mediaLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-white/5 border border-amber-500/20 rounded-xl p-6 flex items-center justify-center hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <p className="text-gray-300 font-semibold text-center">{logo}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-3xl p-10">
            <h3 className="font-serif text-3xl font-bold text-white mb-6">Recent Media Highlights</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-amber-500 pl-6 py-4">
                <p className="text-amber-400 font-semibold mb-2">Forbes Healthcare Innovation</p>
                <p className="text-gray-300">
                  “Dr. Ravishankar Polisetty shares transformative insights on Poly-Scientific Ayurveda and regenerative medicine, highlighting the integration of ancient Indian wisdom with modern science at a Sangam Talks lecture in New Delhi.”</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <p className="text-blue-400 font-semibold mb-2">I-PRISM</p>
                <p className="text-gray-300">
                  " Dr. Ravi Shankar Polisetty shares his vision behind the I-PRISM Medicine Course, a groundbreaking academic initiative developed in collaboration with IIT Hyderabad."
                </p>
              </div>
            {/*}  <div className="border-l-4 border-purple-500 pl-6 py-4">
                <p className="text-purple-400 font-semibold mb-2">MIT Technology Review</p>
                <p className="text-gray-300">
                  "Integration of ancient Ayurveda with AI represents the future of personalized medicine"
                </p>
              </div>*/}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-3xl p-10">
            <h3 className="font-serif text-3xl font-bold text-white mb-6">Latest Interviews</h3>
            <div className="space-y-4">
              <div className="bg-white/5 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Tv size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">TV5 - Health Care</p>
                    <p className="text-gray-400 text-sm">Discover how Artificial Intelligence (AI) is reshaping the future of medical care. </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Radio size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">TV5 - Health Care</p>
                    <p className="text-gray-400 text-sm">Explaining about the PRISM Treatment approach and its role in modern healthcare.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-green-500/20 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Newspaper size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">TV5 - Health Care</p>
                    <p className="text-gray-400 text-sm">, Dr. Ravi Shankar Polisetty from SGP Hospitals gives clear, expert suggestions on how this approach supports better patient outcomes and the future of healthcare.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
