import { useState } from 'react';
import { Heart, Sparkles, Users, Quote, Stethoscope } from 'lucide-react';

const Thoughts = () => {
  const [activeCategory, setActiveCategory] = useState('society');

  const categories = [
    { id: 'society', label: 'For Society', icon: Heart, color: 'from-[#19B5D8] to-[#2DD4BF]' },
    { id: 'youth', label: 'For Youth', icon: Sparkles, color: 'from-[#19B5D8] to-[#3B82F6]' },
    { id: 'leadership', label: 'Leadership & Faculty', icon: Users, color: 'from-[#6366F1] to-[#8B5CF6]' },
    { id: 'healthcare', label: 'Healthcare',  icon: Stethoscope, color: 'from-[#22C55E] to-[#10B981]'}
  ];

  /* 🔥 CARD COLOR THEMES (border + glow + accents) */
  const cardTheme = {
    society: {
      border: 'border-[#19B5D8]/40',
      hoverBorder: 'hover:border-[#19B5D8]',
      glow: 'hover:shadow-[0_0_55px_rgba(25,181,216,0.45)]',
      icon: 'text-[#19B5D8]',
      divider: 'from-[#19B5D8] to-[#2DD4BF]',
    },
    youth: {
      border: 'border-[#3B82F6]/40',
      hoverBorder: 'hover:border-[#3B82F6]',
      glow: 'hover:shadow-[0_0_55px_rgba(59,130,246,0.45)]',
      icon: 'text-[#3B82F6]',
      divider: 'from-[#19B5D8] to-[#3B82F6]',
    },
    leadership: {
      border: 'border-[#8B5CF6]/40',
      hoverBorder: 'hover:border-[#8B5CF6]',
      glow: 'hover:shadow-[0_0_55px_rgba(139,92,246,0.45)]',
      icon: 'text-[#8B5CF6]',
      divider: 'from-[#6366F1] to-[#8B5CF6]',
    },
    healthcare: {
  border: 'border-[#22C55E]/40',
  hoverBorder: 'hover:border-[#22C55E]',
  glow: 'hover:shadow-[0_0_55px_rgba(34,197,94,0.45)]',
  icon: 'text-[#22C55E]',
  divider: 'from-[#22C55E] to-[#10B981]',
   },

  };

  const thoughts = {
    society: [
     {
    quote: "A society that tolerates injustice for a few will one day find injustice normal for all.",
    context: "On Justice and Due Process"
  },
  {
    quote: "Civic sense is not a luxury of the elite; it is the daily practice of dharma in public life.",
    context: "On Civic Responsibility"
  },
  {
    quote: "Economic growth without ethical grounding creates wealth, but not wellbeing.",
    context: "On Development and Ethics"
  },
  {
    quote: "Selective justice fractures public trust and quietly weakens the foundations of a nation.",
    context: "On Rule of Law"
  },
  {
    quote: "Polluted rivers, broken systems, and public apathy are not accidents; they are symptoms of moral neglect.",
    context: "On Environmental and Civic Ethics"
  },
  {
    quote: "True civilisation is not measured by slogans or spectacle, but by fairness, dignity, and restraint.",
    context: "On Civilizational Values"
  },
  {
    quote: "When narratives replace truth, societies divide; when truth is restored, harmony becomes possible again.",
    context: "On Truth and Social Harmony"
  },
  {
    quote: "Pluralism is not a weakness of society—it is the strength that allows a civilisation to endure.",
    context: "On Diversity and Unity"
  },
  {
    quote: "Debt without dignity enslaves households and erodes the stability of society.",
    context: "On Household Debt and Financial Ethics"
  },
  {
    quote: "A society truly rises when responsibility becomes collective, not endlessly outsourced to authority.",
    context: "On Collective Responsibility"
  }
    ],
    youth: [
       {
    quote: "Do not inherit opinions blindly; question with courage and think with integrity.",
    context: "On Independent Thinking"
  },
  {
    quote: "Education must awaken discernment, not obedience.",
    context: "On the Purpose of Education"
  },
  {
    quote: "Leadership begins with character long before position or power.",
    context: "On True Leadership"
  },
  {
    quote: "The youth must learn to distinguish progress from propaganda.",
    context: "On Critical Awareness"
  },
  {
    quote: "Moral courage is more valuable than technical brilliance without ethics.",
    context: "On Ethics and Excellence"
  },
  {
    quote: "Ancient knowledge deserves Scientific inquiry, not blind dismissal and not blind acceptance.",
    context: "On Knowledge and Rationality"
  },
  {
    quote: "Short-term success without long-term values leads to hollow achievement.",
    context: "On Sustainable Success"
  },
  {
    quote: "Do not become a keyboard critic—be a silent builder of systems.",
    context: "On Constructive Action"
  },
  {
    quote: "Anger at injustice must mature into responsibility, not outrage.",
    context: "On Channeling Anger"
  },
  {
    quote: "The future belongs to those who combine reason, compassion, and discipline.",
    context: "On Building the Future"
  }
    ],
    leadership: [
       {
    quote: "Power without dharma is authority without legitimacy.",
    context: "On Power and Dharma"
  },
  {
    quote: "A leader’s first duty is not control, but moral clarity.",
    context: "On Ethical Leadership"
  },
  {
    quote: "Selective enforcement of rules destroys faith faster than open failure.",
    context: "On Justice and Governance"
  },
  {
    quote: "Knowledge divorced from integrity becomes exploitation.",
    context: "On Ethics in Knowledge"
  },
  {
    quote: "True leadership educates, empowers, and withdraws—never dominates.",
    context: "On the Nature of Leadership"
  },
  {
    quote: "Institutions fail when leaders prioritise image over truth.",
    context: "On Institutional Integrity"
  },
  {
    quote: "Faculty shape civilizations not through syllabus, but through values lived daily.",
    context: "On the Role of Educators"
  },
  {
    quote: "Innovation requires trust; fear-driven systems kill creativity.",
    context: "On Innovation Culture"
  },
  {
    quote: "Correction is leadership’s responsibility, not an act of weakness.",
    context: "On Accountability"
  },
  {
    quote: "A leader who cannot listen has already stopped learning.",
    context: "On Humility and Growth"
  }
    ],
    healthcare: [
  {
    quote: "Healthcare must anticipate disease, not merely respond to crisis.",
    context: "Predictive Healthcare",
  },
  {
    quote: "Personalized medicine works only when intelligence replaces generalization.",
    context: "Intelligent Personalization",
  },
  {
    quote: "End-stage care should focus on restoration, dignity, and regeneration.",
    context: "Restorative Care",
  },
  {
    quote: "Fragmented specialties fail where integrated biological systems succeed.",
    context: "Integrative Health Systems",
  },
  {
    quote: "AI should enhance human judgment in medicine, not replace it.",
    context: "Human-Centered AI",
  },
  {
    quote: "Continuous biosignals will define the future of diagnosis.",
    context: "Real-Time Diagnostics",
  },
  {
    quote: "Evidence-based science and ancient wisdom can coexist in global health.",
    context: "Wisdom and Evidence",
  },
  {
    quote: "Healthcare equity begins when advanced care is no longer exclusive.",
    context: "Accessible Healthcare",
  },
  {
    quote: "Medical education must teach systems health, not isolated disease.",
    context: "Health Education Reform",
  },
  {
    quote: "True healthcare measures human well-being, not just clinical metrics.",
    context: "Whole-Human Health",
  },
],


  };

  const theme = cardTheme[activeCategory as keyof typeof cardTheme];

  return (
    <section
      id="thoughts"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="px-6 py-2 bg-gradient-to-r from-[#19B5D8] to-[#8B5CF6] text-white text-sm font-semibold rounded-full shadow-lg">
            Dr. PRS Thoughts
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
            Vision, Insights & Wisdom
          </h2>

          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Thoughts on society, youth empowerment, leadership, and healthcare
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300
                ${
                  active
                    ? `bg-gradient-to-r ${cat.color} text-white scale-105 shadow-xl`
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {thoughts[activeCategory as keyof typeof thoughts].map((thought, i) => (
            <div
              key={i}
              className={`group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8
              border ${theme.border}
              transition-all duration-500
              hover:-translate-y-2
              ${theme.hoverBorder}
              ${theme.glow}`}
              style={{ animation: `fadeInUp 0.6s ease ${i * 0.1}s both` }}
            >
              <Quote
                className={`w-12 h-12 mb-6 ${theme.icon}
                group-hover:scale-110 transition-transform`}
              />

              <blockquote className="text-lg text-white italic leading-relaxed mb-6">
                “{thought.quote}”
              </blockquote>

              <div className="flex items-center justify-between">
                <div className={`h-1 flex-1 bg-gradient-to-r ${theme.divider} rounded-full mr-4`} />
                <span className="text-sm text-blue-300 font-semibold">
                  {thought.context}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Thoughts;