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
      authors: "Abdumanap I, Ravishankar Polisetty et al",
      title:
        "Outcomes of Mitral Valve Replacement in Sexagenarians – A Retrospective Study of Our Center",
      journal: "Journal of Cardiology and Cardiac Surgery, Vol 3, 23–26",
      year: "Oct 2011",
    },
    {
      authors: "Skopin I, Mironenko V, Ravishankar Polisetty et al",
      title:
        "Reconstruction of Sub-Valvular Apparatus by PTFE in Mitral Valve Replacement Operations",
      journal: "Journal of Thoracic and Cardiovascular Surgery",
      year: "Jun 2011",
    },
    {
      authors: "Abidov M., Ravishankar Polisetty., Danilova I, et al",
      title:
        "Role of Immunomodulation, iNOS and NO during an Inflammatory Response in Cardiomyocytes",
      journal: "Journal of Cardiac Failure, Vol 3",
      year: "Sep 2010",
    },
    {
      authors: "Abidov M., Ravishankar Polisetty., Danilova I, et al",
      title:
        "The Understanding of Fundamentals of Cardiac Regeneration and Role of Immunomodulation – A Novel Approach in Treating Heart Diseases and Preventing Heart Failure",
      journal: "Journal of Cardiac Failure, Vol 3",
      year: "Sep 2010",
    },
    {
      authors: "Ravishankar Polisetty, Kamabarov S.",
      title:
        "Outcomes of patients during surgical management of Patients with Ischemic Mitral Regurgitation",
      journal: "The Heart Surgery Forum, Vol 13, Suppl 2",
      year: "Oct 2010",
    },
    {
      authors: "Ravishankar Polisetty et al",
      title:
        "The Understanding of Fundamentals of Cardiac Regeneration and Role of Immunomodulation: A Novel Approach in Treating Ischemic Heart Disease",
      journal: "The Heart Surgery Forum, Vol 13, Suppl 2, P S125",
      year: "Oct 23, 2010",
    },
    {
      authors: "Ravishankar Polisetty et al",
      title:
        "Morpho-Physiological Aspects of Bio-Prosthesis in Valvular Heart Disease: Applying the Experience to Improve Durability of Bio-Prosthesis",
      journal: "The Heart Surgery Forum, Vol 13, Suppl 2, P S99–S100",
      year: "Oct 22, 2010",
    },
    {
      authors: "Ravishankar Polisetty., Abidov M.",
      title:
        "Neuroprotective Effect of Brahmi in Patients Undergoing Coronary Artery Surgery with Cardiopulmonary Bypass",
      journal: "Russian Journal of Circulation, Vol. 4, 85–87, P 22–24",
      year: "Sep 2009",
    },
    {
      authors: "Ravishankar Polisetty., Kambarov S.",
      title:
        "Landmark on the Cardiac Images That Allow Us to Estimate the Extent of the Heart in Order to Build a 3D Model of the Failing Heart",
      journal: "Intra-Faculty Report (Unpublished)",
      year: "Dec 2009",
    },
    {
      authors: "Ravishankar Polisetty.",
      title:
        "Cardiac Surgical Site Infections at Bakoulev Scientific Center for Cardio-Vascular Surgery: A Case Control Study, Preventive Strategies and Follow-up",
      journal: "The Russian Journal of Infection Control, Vol 4, 11–17",
      year: "Jun 2009",
    },
    {
      authors: "Ravishankar Polisetty., Kambarov S.",
      title:
        "The Management of Temperature During Cardiopulmonary Bypass: Effect on Neuropsychological Outcome",
      journal: "Annals of Cardiac Surgery (Russian), Vol. 10, 41–47",
      year: "Jul 2009",
    },
    {
      authors: "Muratov R, Ravishankar Polisetty, Kambarov S",
      title:
        "Sutureless Aortic Valve Replacement with the Trilogy Aortic Valve System: Russian Experience",
      journal: "Cardiology and Cardiac Surgery, Vol 2, Issue 4, 34–37",
      year: "Jan 2008",
    },
    {
      authors: "Ravishankar Polisetty., Kambarov S.",
      title:
        "Bioglue-LAB Versus Suture Wound Repair in a Contaminated Wound Model",
      journal: "Creative Cardiac Surgery, Vol. 12, No. 1, 69–72",
      year: "Jul 2007",
    },
    {
      authors: "Skopin, Mironenko V, Ravishankar Polisetty et al",
      title:
        "Valvular Heart Diseases of Varied Etiology, Complicated by IHD",
      journal: "Medical Faculty, Vol. 2, 12–17",
      year: "Sep 2006",
    },
    {
      authors: "Ravishankar Polisetty.",
      title:
        "Left Main-Stem Coronary Artery Disease: Surgical versus Medical Management",
      journal: "The Russian Journal of Creative Surgery, Vol. 7, No. 6, 71–73",
      year: "Nov 2005",
    },
    {
      authors: "Ravishankar Polisetty.",
      title:
        "Ayurvedic Approach to Constitutional, Biochemical, Metaphysical and Metabolic Typing of Various Tissues in the Human Body",
      journal: "Moscow, Russian Journal of Metabolism, Vol 4, Issue 6",
      year: "Jun 2005",
    },
    {
      authors: "Ravishankar Polisetty., Abidov M, Pavlenko S.",
      title:
        "Role and Influence of Phthalazine Derivatives on the Postoperative Period in Patients After Undergoing Surgical Intervention After Perforation of Duodenal Ulcers",
      journal: "Russian Journal of Annals of Surgery, Vol 2, 17–20",
      year: "Apr 2005",
    },
    {
      authors: "Ravishankar Polisetty.",
      title: "Effects of Arjuna Terminalia on the MCIP1 Gene",
      journal: "Moscow, Journal of Future Genetics, Vol 1, Issue 2, 19–22",
      year: "Feb 2005",
    },
    {
      authors: "Ravishankar Polisetty.",
      title: "Effects of Smilax Glabra (Chopchini) on the Her2neu Gene",
      journal: "Moscow, Journal of Future Genetics, Vol 1, Issue 11, 25–27",
      year: "Nov 2004",
    },
    {
      authors: "Ravishankar Polisetty, Nikolskiy Peter Vladislavovich",
      title:
        "Effect of Various Diets Prescribed in the Indian System of Medicine on the Resting Potential of Cells",
      journal:
        "Russian Journal of Physiology – Heart and Circulatory Physiology, 280: H2053–H2060, Vol. 280, Issue 5",
      year: "Dec 2002",
    },
    {
      authors: "Ravishankar Polisetty.",
      title: "Tachykinins - Kassinnin and TRH as Probable Antiepileptic Agents",
      journal: "Newsletter of Moscow State University, Russian Federation",
      year: "Mar 1994",
    },
    {
      authors: "Ravishankar Polisetty, Teja Sree Bitla, Purna Divya Singanamala, Shaik Aminabee",
      title:
        "Limitations to Therapeutic Approaches to T2DM in Light of Different HbA1C Values Suggested by Different Scientific Associations: A Review",
      journal: "Research & Reviews: A Journal of Medicine, 13(2):13–26",
      year: "2023",
    },
    {
      authors: "Ravishankar Polisetty, Purna Divya Singanamala, Teja Sree Bitla",
      title: "Current Issues in Understanding of Diabetes",
      journal: "Research & Reviews: A Journal of Medicine, 13(2):1–12",
      year: "2023",
    },
  ];

 const standPublications: Publication[] = [
  {
    authors: "Ravishankar Polisetty",
    title:
      "DES – A comparative study and its evolution and experiences in the Russian context",
    journal: "SCCVS of Bakulev, Moscow, Russian Federation",
    year: "May 2007",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Study of Various Anti-Anginals Available in the Russian Markets",
    journal:
      "12th All Russian Cardiology Conference, SCCVS of Bakulev, Moscow, Russian Federation",
    year: "May 2006",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Useful Effects of Shankhpushpi on Nervous Tissue During Avia-Cosmic Journeys in Space Medicine",
    journal: "SCCVS of Bakulev, Moscow, Russian Federation",
    year: "Jul 2006",
  },
  {
    authors: "Ravishankar Polisetty" ,
    title: "Shilajit, a Neuro Protector",
    journal: "SCCVS of Bakulev, Moscow, Russian Federation",
    year: "Sep 2005",
  },
  {
    authors:
      "Vladimir Ivanovich Onopriev, Vladimir Moiseevich Durleshter, Vadim Valerevich Ryabchun, Polisetty R",
    title:
      "Comparative Pre- and Postoperative Results Analysis of Functional State of the Esophagus Assessment in Patients with Various Stages of Achalasia",
    journal:
      "Russian Center of Functional Surgical Gastroenterology, Krasnodar, Russian Federation",
    year: "Sep 2004",
  },
  {
    authors: "Ravishankar Polisetty, Lud N",
    title: "Lipid Disorders in Post-Terminal Ileiectomy Patients",
    journal: "International Conference, Frankfurt-am-Main, Germany",
    year: "1995",
  },
  {
    authors: "Ravishankar Polisetty",
    title: "Correlation of Human Anatomy with Ayurvedic Anatomy",
    journal: "International Students’ Conference, Minsk, Belarus",
    year: "1991",
  },

  /* ======== ADDED CONFERENCE PRESENTATIONS ======== */

  {
    authors: "Ravishankar Polisetty",
    title:
      "Successful surgical correction of RSOV rupturing into the Inter Atrial Septum – Case Report",
    journal:
      "56th Annual Meeting of the European Society for Cardiovascular Surgery, Nice, France",
    year: "Apr 26, 2014",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Ayurvedic Doshas and Their Management of Ischemic Heart Disease",
    journal:
      "National Holistic Health Seminar on Evidence-Based Medicine, Nagpur, India",
    year: "Sep 17, 2012",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Ischemic Heart Disease – The Past, Present and Future",
    journal:
      "Arogya Bharathi’s National Health Conference, Nagpur, India",
    year: "Oct 16, 2011",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Experiment with a New Drug (Tamerit) in Myocardial Infarction Protecting Myocardium and Preventing Heart Failure",
    journal:
      "14th Annual Meeting of the Heart Failure Society of America, Boston, MA, USA",
    year: "Sep 12, 2010",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "The Understanding of Fundamentals of Cardiac Regeneration and Role of Immunomodulation: A Novel Approach in Treating Ischemic Heart Disease",
    journal:
      "20th World Congress of World Cardiothoracic Surgery",
    year: "Oct 23, 2010",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Morpho-Physiological Aspects of Bio-Prosthesis in Valvular Heart Disease: Applying Experience to Improve Durability of Bio-Prosthesis",
    journal:
      "20th World Congress of World Cardiothoracic Surgery",
    year: "Oct 22, 2010",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Case Studies of 5 Patients with CD5 Lymphoma – Holistic Approach for Cancer Cure",
    journal:
      "Arogyabharathi’s Third National Health Conference, Mumbai, India",
    year: "2010",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Electrophysiological Studies and Their Clinical Significance in the Outcome of Lymphedema Patients",
    journal:
      "Third National Seminar on Applied Ayurveda, Institute of Applied Dermatology, Kasargod, India",
    year: "Feb 07, 2008",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Case Studies of 5 Patients Implanted with Arbor Trilogy Aortic Valve – Protocol AS 2015",
    journal:
      "Heart Failure Society of America Conference, Washington DC, USA",
    year: "Sep 12, 2007",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Protective Effect of CAD Rx (Atherolyzin™), a Polyherbal Formulation, on Isoproterenol-Induced Myocardial Infarction in Rats",
    journal:
      "i-Serveveda’s National Conference on Indigenous Technologies, Hyderabad, India",
    year: "Feb 16, 2006",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Effects of Various Diets Prescribed in the Indian System of Medicine on the Resting Potential of Cells",
    journal:
      "i-Serveveda’s National Conference on Indigenous Technologies, Hyderabad, India",
    year: "Feb 16, 2006",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Advanced Digital Technologies Derived from Translational Research of Ancient Indian Systems as a Global Solution",
    journal:
      "Speaker, IIT Hyderabad E-Summit",
    year: "2023",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Poly Scientific Ayurveda: Advanced Digital Health Analytics & Future Health Tech",
    journal:
      "Spotlight Presentation, GITEX Global, Dubai World Trade Centre",
    year: "Oct 2023",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Poly Scientific Approach to Personalized Healthcare & Launch of Docture-Poly Device",
    journal:
      "IPSA-2023 Conference on Smart Consumer Wearables, Hyderabad, India",
    year: "Nov 25, 2023",
  },
  {
    authors: "Ravishankar Polisetty",
    title:
      "Integration of Ayurveda and Modern Medicine into Medical Devices; Session Moderator",
    journal:
      "Europe India Leaders Conference (EICBI), Europe–India Centre for Business and Industry",
    year: "Mar 6, 2024",
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
