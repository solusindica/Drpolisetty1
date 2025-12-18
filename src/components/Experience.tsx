import { Building2, GraduationCap, Briefcase } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      period: '2023 - Present',
      title: 'Research Consultant',
      organization: 'Johns Hopkins University',
      location: 'Baltimore, USA',
      description: 'Cardiology & Intellectual Property Research',
      icon: GraduationCap,
    },
    {
      period: '2020 - Present',
      title: 'CEO & Director R&D',
      organization: 'Sai Ganga Panakeia',
      location: 'India',
      description: 'Leading translational research and medical device innovation',
      icon: Briefcase,
    },
    {
      period: '2019 - 2023',
      title: 'Head of Departments',
      organization: 'ANO Research Institute',
      location: 'Moscow, Russia',
      description: 'Cardiology & Immunology Research Leadership',
      icon: Building2,
    },
    {
      period: '2018 - Present',
      title: 'Founder & CEO',
      organization: 'Panacea Nova Inc.',
      location: 'Toronto, Canada',
      description: 'Global healthcare innovation and device development',
      icon: Briefcase,
    },
    {
      period: '2015 - 2020',
      title: 'Senior Cardiovascular Surgeon',
      organization: 'Narayana Health & Apollo Hospitals',
      location: 'India',
      description: 'Advanced cardiac surgery and clinical research',
      icon: Building2,
    },
    {
      period: '2017 - 2019',
      title: 'Advisor',
      organization: 'European Ayurveda Academy',
      location: 'Paris, France',
      description: 'Integrative medicine research and curriculum development',
      icon: GraduationCap,
    },
    {
      period: '2016 - 2018',
      title: 'Cardiovascular Consultant',
      organization: 'Arbor Surgical & Diplomat Clinic',
      location: 'USA & Russia',
      description: 'International cardiac care and surgical excellence',
      icon: Building2,
    },
  ];

  return (
    <section id="experience" className="relative py-32 bg-gradient-to-b from-black via-blue-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Global Leadership Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three decades of excellence across continents, institutions, and breakthrough innovations
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 via-blue-500 to-purple-500 hidden lg:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  <div className={`lg:w-1/2 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-2xl p-8 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-amber-400 font-semibold text-sm tracking-wide">
                          {item.period}
                        </span>
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center lg:hidden">
                          <Icon size={20} className="text-black" />
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-blue-300 font-semibold mb-1">{item.organization}</p>
                      <p className="text-gray-400 text-sm mb-4">{item.location}</p>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center border-4 border-black shadow-xl">
                    <div className="w-full h-full rounded-full flex items-center justify-center">
                      <Icon size={28} className="text-black" />
                    </div>
                  </div>

                  <div className="lg:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
          >
            Request Collaboration
          </a>
        </div>
      </div>
    </section>
  );
}
