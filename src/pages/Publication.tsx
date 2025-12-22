import { BookOpen, ScrollText } from "lucide-react";

type Publication = {
  title: string;
  authors: string;
  journal: string;
  year?: string;
};

export default function Publication(): JSX.Element {
  const journalPublications: Publication[] = [
    {
      authors: "Carlos V. Rizzo-Sierra, Ravishankar Polisetty",
      title:
        "Membrane-Resting Potentials and Tridosha Prakrithi applied to Animal Behavior: A Physiological Model for the Theoretical Foundations of Ayurveda",
      journal: "Light on Ayurveda – Journal of Health, 11(3):49–51",
      year: "May 2013",
    },
    {
      authors: "Abdumanap I, Polisetty R et al",
      title:
        "Outcomes of Mitral Valve Replacement in Sexagenarians – A Retrospective Study of Our Center",
      journal: "Journal of Cardiology and Cardiac Surgery, Vol 3, 23–26",
      year: "Oct 2011",
    },
    {
      authors: "Skopin I, Mironenko V, Polisetty R et al",
      title:
        "Reconstruction of Sub-Valvular Apparatus by PTFE in Mitral Valve Replacement Operations",
      journal: "Journal of Thoracic and Cardiovascular Surgery",
      year: "Jun 2011",
    },
    {
      authors: "Ravishankar Polisetty et al",
      title:
        "Limitations to Therapeutic Approaches to T2DM in Light of Different HbA1C Values Suggested by Different Scientific Associations: A Review",
      journal: "Research & Reviews: A Journal of Medicine, 13(2):13–26",
      year: "2023",
    },
    {
      authors: "Ravishankar Polisetty et al",
      title: "Current Issues in Understanding of Diabetes",
      journal: "Research & Reviews: A Journal of Medicine, 13(2):1–12",
      year: "2023",
    },
  ];

  const standPublications: Publication[] = [
    {
      authors: "Polisetty R",
      title:
        "DES – A comparative study and its evolution and experiences in the Russian context",
      journal: "SCCVS of Bakulev, Moscow, Russian Federation",
      year: "May 2007",
    },
    {
      authors: "Polisetty R",
      title:
        "Useful effects of Shankhpushpi on nervous tissue during avia-cosmic journeys in space medicine",
      journal: "SCCVS of Bakulev, Moscow, Russian Federation",
      year: "Jul 2006",
    },
    {
      authors: "Polisetty R, Lud N",
      title:
        "Lipid disorders in post-terminal ileiectomy patients",
      journal: "International Conference, Frankfurt-am-Main, Germany",
      year: "1995",
    },
  ];

  return (
    <section
      id="publication"
      className="relative py-32 bg-gradient-to-b from-black via-[#070d1f] to-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
            Journal & Academic Publications
          </h2>
          <div className="w-28 h-[2px] bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mt-6 mb-8" />
          <p className="text-xl text-gray-400 max-w-4xl mx-auto italic">
            Peer-reviewed research contributions across cardiology, immunology,
            genomics, Ayurveda, regenerative medicine, and systems biology
          </p>
        </div>

        {/* ================= JOURNAL PUBLICATIONS ================= */}
        <div className="mb-28 relative">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="text-amber-400" size={28} />
            <h3 className="font-serif text-3xl font-bold text-white">
              Journal Publications
            </h3>
          </div>

          <div className="space-y-8 border-l border-amber-500/20 pl-8">
            {journalPublications.map((pub, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-amber-400/50 hover:shadow-[0_0_40px_rgba(255,191,36,0.15)] transition-all"
              >
                <span className="absolute -left-[41px] top-8 w-3 h-3 rounded-full bg-amber-400" />

                <p className="text-lg font-semibold text-white mb-2 leading-snug">
                  {pub.title}
                </p>

                <p className="text-sm text-gray-400 mb-1">
                  {pub.authors}
                </p>

                <p className="text-sm text-amber-400 font-medium">
                  {pub.journal} {pub.year && `• ${pub.year}`}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= STAND PUBLICATIONS ================= */}
        <div className="mb-24 relative">
          <div className="flex items-center gap-4 mb-12">
            <ScrollText className="text-blue-400" size={28} />
            <h3 className="font-serif text-3xl font-bold text-white">
              Stand & Conference Publications
            </h3>
          </div>

          <div className="space-y-8 border-l border-blue-500/20 pl-8">
            {standPublications.map((pub, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(96,165,250,0.15)] transition-all"
              >
                <span className="absolute -left-[41px] top-8 w-3 h-3 rounded-full bg-blue-400" />

                <p className="text-lg font-semibold text-white mb-2">
                  {pub.title}
                </p>

                <p className="text-sm text-gray-400 mb-1">
                  {pub.authors}
                </p>

                <p className="text-sm text-blue-400 font-medium">
                  {pub.journal} {pub.year && `• ${pub.year}`}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-purple-500/10 border border-amber-500/30 rounded-3xl p-12 text-center">
          <p className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed mb-6">
            “Over <span className="text-amber-400 font-semibold">24 peer-reviewed publications</span>,
            with <span className="text-amber-400 font-semibold">8 additional manuscripts</span> currently
            under advanced international review.”
          </p>
          <p className="text-amber-400 text-xl font-semibold">
            — Dr. Ravishankar Polisetty
          </p>
        </div>

      </div>
    </section>
  );
}
