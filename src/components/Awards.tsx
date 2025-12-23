import { Award, Trophy, Star, Crown } from 'lucide-react';

export default function Awards() {
  const awards = [
     {
      year: '2024',
      title: 'Peter Drucker Excellence Award',
      organization: 'International Leadership Foundation, UK & India',
      icon: Crown,
    },
    {
      year: '2024',
      title: 'Honorary Vice-Chair',
      organization: 'Europe-India Centre for Business Industry, Brussels',
      icon: Trophy,
    },
    {
      year: '2024',
      title: 'Hind Ratan Award',
      organization: 'Government of India',
      icon: Star,
    },
    {
      year: '2024',
      title: 'Pradhana Mantri Atma Nirbhar Bharat Abhiyan Sangatan Award',
      organization: 'Honourable Governor of Maharashtra',
      icon: Award,
    },
    {
      year: '2024',
      title: 'Super Indians Gujarat Award',
      organization: 'Chief Minister of Gujarat',
      icon: Trophy,
    },
    // 2023
    {
      year: '2023',
      title: 'Pride of India Award – Health Care',
      organization: 'Goa, India',
      icon: Award,
    },
    {
      year: '2023',
      title: 'Nelson Mandela Leadership Award',
      organization: 'University of Oxford, UK',
      icon: Crown,
      
    },
    {
      year: '2023',
      title: 'Outstanding Achievement Award for Healthcare Excellence',
      organization: 'Bangkok, Thailand',
      icon: Trophy,
    },
    {
      year: '2023',
      title: 'Healthcare Leadership Achievers Award – Excellence in Ayurveda',
      organization: 'New Delhi, India',
      icon: Star,
    },
    {
      year: '2023',
      title: 'Global Indian of the Year & World’s Greatest Brands Award',
      organization: 'On behalf of Sai Ganga Panakeia',
      icon: Crown,
    },
    {
      year: '2023',
      title: 'Fastest Growing Indian Company Excellence Award',
      organization: 'Dubai, UAE',
      icon: Award,
    },
    {
      year: '2023',
      title: 'Special Award – India Start-Up Festival',
      organization: 'Bengaluru, India',
      icon: Trophy,
    },
    {
      year: '2023',
      title: 'Swasthya Award',
      organization: 'Swasthya Global Ayush & Wellness Expo',
      icon: Star,
    },
    // 2022
    {
      year: '2022',
      title: 'Ayurveda Ratan Award',
      organization: 'All-Party Parliamentary Group on Indian Traditional Sciences, UK',
      icon: Trophy,
    },
    {
      year: '2022',
      title: 'Technology Excellence Award',
      organization: 'TITA',
      icon: Award,
    },
    {
      year: '2022',
      title: 'Vaidya Seva Ratna Award',
      organization: 'National Ayurvedic Day, Hyderabad',
      icon: Star,
    },
    {
      year: '2022',
      title: 'Best Integrated Medical Hospital Award',
      organization: 'On behalf of Sai Ganga Panakeia, Telangana',
      icon: Trophy,
    },
    {
      year: '2022',
      title: 'Dhanvantri Puraskar Award',
      organization: 'National Ayurveda Day, India',
      icon: Crown,
    },
    {
      year: '2022',
      title: 'Ayurveda Integrated Medicine Expert & Arogya Ratna',
      organization: 'Public Health Care Council, India',
      icon: Award,
    },
    {
      year: '2022',
      title: 'Ugadi Visishta Purushkar Award',
      organization: 'Ravindra Bharati, Hyderabad',
      icon: Star,
    },
    {
      year: '2022',
      title: 'Felicitation by Sanskrit Academy of Osmani University',
      organization: 'For contributions to Ayurveda through Sanskrit',
      icon: Trophy,
    },
    // 2021
    {
      year: '2021',
      title: 'Vaidya Shiromani Award',
      organization: 'National Doctor’s Day, Megacity Navakala Vedika',
      icon: Star,
    },
    // 2019
    {
      year: '2019',
      title: '9th Medgate India Award – Most Innovative Product',
      organization: 'India',
      icon: Trophy,
    },
    // 2013
    {
      year: '2013',
      title: 'Lead India Award - Bharat Ratna',
      organization: 'Presented by Dr. APJ Abdul Kalam',
      icon: Star,
    },
  ];

  return (
    <section
  id="awards"
  className="relative pt-12 pb-16 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
>
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-[128px] animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-[128px] animate-pulse"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
        Global Recognition & Honors
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-4"></div>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Celebrated worldwide for pioneering contributions to medical science and healthcare innovation
      </p>
    </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-2xl p-6 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-amber-400 font-bold text-lg">{award.year}</span>
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-black" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3 leading-tight">
                  {award.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{award.organization}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border-2 border-amber-500/50 rounded-3xl p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">15+</div>
              <div className="text-gray-300 text-lg">International Awards</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-gray-300 text-lg">Keynote Speeches</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">10+</div>
              <div className="text-gray-300 text-lg">Countries Honored</div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-3xl p-10 text-center">
          <Trophy size={64} className="text-amber-400 mx-auto mb-6" />
          <h3 className="font-serif text-3xl font-bold text-white mb-4">
            Recognized by World Leaders
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Dr. Polisetty's groundbreaking work has been acknowledged by presidents, prime ministers, and global health organizations, cementing his position as one of the most influential voices in modern healthcare innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
