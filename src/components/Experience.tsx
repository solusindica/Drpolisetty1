import { GraduationCap, Briefcase, Building2, Award, Globe } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      period: '1988 – 1995',
      title: 'Foundation | Scholar & Leader',
      organization: 'National Academic & Research Excellence',
      location: 'India • Europe',
      description:
        'NTSE Scholar, National Olympiad Rank holder, HRD & MCI scholarships, multiple Best Student awards, and early research correlating Ayurveda with Anatomy in Europe.',
      icon: GraduationCap,
    },
    {
      period: '1996 – 2000',
      title: 'Innovator | Early Scientist',
      organization: 'International Research & Innovation',
      location: 'Europe • India',
      description:
        'International publications, patent granted for Carcino-Cure (2000), and Telemedicine & MIS project presented to the President of India.',
      icon: Award,
    },
    {
      period: '2001 – 2006',
      title: 'Integrative Medicine Pioneer',
      organization: 'Diplomat Clinic LLC',
      location: 'Russia',
      description:
        'Founder, CEO & Medical Director. Treated 1,500+ patients using Ayurveda + Allopathy, established scientific basis of Tridosha, received Gold Medal in General Surgery, and published high-impact molecular & genetic research.',
      icon: Briefcase,
    },
    {
      period: '2005 – 2009',
      title: 'Cardiac Surgeon & Global Researcher',
      organization: 'USA • Russia • United Kingdom',
      location: 'International',
      description:
        'Clinical Trial Coordinator in USA (Medtronic acquisition pathway), Senior Consultant Cardiac Surgeon in Moscow, Medical Advisor at Oxford University, and member of major international cardiac societies.',
      icon: Building2,
    },
    {
      period: '2010 – 2011',
      title: 'Regenerative Science & Immunomodulation',
      organization: 'Advanced Cardiac & Immunology Research',
      location: 'Moscow, Russia',
      description:
        'Landmark research in cardiac regeneration, stem cell science, and immunomodulation; awarded Young Investigator Award; appointed Head of Cardiology & Immunology.',
      icon: Award,
    },
    {
      period: '2011 – 2017',
      title: 'Institution Builder & R&D Leader',
      organization: 'Sai Ganga Panakeia Ltd & Global CROs',
      location: 'India • Canada',
      description:
        'Founder & CEO of Sai Ganga Panakeia, Director R&D in Canada, artificial heart valve innovation, PARP & P2X4 research,got Lead India Award - Bharat Ratna presented by APJ Abdul Kalam and Visiting Cardiac Surgeon at Narayana Health.',
      icon: Briefcase,
    },
    {
      period: '2018 – 2021',
      title: 'PRISM Era | Scale & Patents',
      organization: 'Translational Medicine & Digital Health',
      location: 'India',
      description:
        'Filed 40+ patents across immunology, oncology, and digital health; plenary speaker on Government of India platforms; recipient of Medgate India Innovation Award and Vaidya Shiromani Award.',
      icon: Globe,
    },
    {
      period: '2022 – 2023',
      title: 'Global Thought Leader',
      organization: 'International Academic & Policy Platforms',
      location: 'UK • India',
      description:
        'Honored with Ayurveda Ratan at UK Parliament, Dhanvantari Puraskar, and Vaidya Seva Ratna; delivered keynotes at IIT Hyderabad, UK Parliament, and International Yoga Day; led systems medicine & diabetes research.',
      icon: Globe,
    },
    {
      period: '2024 – 2025',
      title: 'Global Healthcare Statesman',
      organization: 'Europe–India & Global Health Leadership',
      location: 'UK • Europe • India',
      description:
        'Recipient of Peter Drucker Excellence Award (Oxford, 2024), Honorary Vice-Chair at Europe–India Business Council, Super Indians Gujarat Award, member of Canadian Cardiac Surgery & IMA, and architect of Poly-Scientific Ayurveda & PRISM Framework.',
      icon: Award,
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-32 bg-gradient-to-b from-black via-blue-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Career Arc & Global Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A multi-decade evolution spanning medicine, science, innovation, and global leadership
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
                  <div
                    className={`lg:w-1/2 ${
                      isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'
                    }`}
                  >
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-2xl p-8 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300">
                      <span className="text-amber-400 font-semibold text-sm tracking-wide">
                        {item.period}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white mt-2 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-300 font-semibold">
                        {item.organization}
                      </p>
                      <p className="text-gray-400 text-sm mb-4">
                        {item.location}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center border-4 border-black shadow-xl">
                    <Icon size={28} className="text-black  translate-x-3 translate-y-3" />
                  </div>

                  <div className="lg:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Arc Footer */}
        <div className="mt-24 text-center">
          <p className="text-xl md:text-2xl font-serif text-gray-300 tracking-wide">
            Clinician → Surgeon → Scientist → Innovator → Institution Builder → Global Thought Leader
          </p>
        </div>
      </div>
    </section>
  );
}
