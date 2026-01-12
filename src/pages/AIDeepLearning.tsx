import { useEffect, ReactNode, useState } from "react";

/* ================= PREMIUM GLASS CARD ================= */
function PremiumCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative rounded-3xl p-10 bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-xl border border-blue-400/20 shadow-[0_30px_80px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_120px_rgba(255,193,7,0.25)] transition duration-500">

      {/* LEFT yellow gradient line */}
      <div className="absolute left-0 top-6 bottom-6 w-[4px] rounded-full 
        bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-300 
        shadow-[0_0_24px_rgba(255,193,7,0.7)]" 
      />

      <h3 className="text-2xl font-semibold text-white mb-4 pl-6">
        {title}
      </h3>

      <div className="text-gray-200 text-lg leading-relaxed pl-6">
        {children}
      </div>
    </div>
  );
}

function DemoRequestModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative max-w-2xl w-full rounded-3xl p-10
                      bg-gradient-to-br from-blue-900/40 to-blue-800/30
                      backdrop-blur-xl border border-blue-400/30
                      shadow-[0_40px_120px_rgba(0,0,0,0.8)]">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-300 hover:text-amber-400 text-xl"
        >
          ✕
        </button>

        <h3 className="text-2xl font-semibold text-white mb-8">
          Initiate Inquiry
        </h3>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            className="premium-input bg-white text-black"
            placeholder="Full Name"
            required
          />
          <select
            required
            className="premium-input bg-white text-black"
          >
            <option value="" disabled selected className="text-gray-500">
              Select Gender
            </option>
            <option className="bg-white text-black">Male</option>
            <option className="bg-white text-black">Female</option>
            <option className="bg-white text-black">Other</option>
          </select>

          <input
            className="premium-input bg-white text-black"
            placeholder="Phone Number"
            required
          />
          <input
            className="premium-input bg-white text-black"
            placeholder="Email Address"
            required
          />

          <input
            className="premium-input bg-white text-black"
            placeholder="Institution / Organization"
          />
          <input
            className="premium-input bg-white text-black"
            placeholder="Designation"
          />

          {/* Remarks */}
          <div className="md:col-span-2">
            <textarea
              className="premium-input resize-none h-28 w-full bg-white text-black"
              placeholder="Remarks / Brief Description of Your Inquiry"
            />
          </div>

          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              className="w-full px-10 py-4 rounded-full
                         bg-gradient-to-r from-amber-400 to-yellow-500
                         text-black font-semibold tracking-wide
                         hover:scale-[1.05] transition duration-300
                         shadow-[0_20px_60px_rgba(255,193,7,0.4)]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


/* ================= MAIN PAGE ================= */
const AIDeepLearning: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-[#06070a] text-white overflow-hidden">
{/* ================= YELLOW GRADIENT BANNER ================= */}
<div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

  <div className="relative z-10 text-center px-6 max-w-5xl space-y-6">
    {/* Top small text in black */}
    <p className="uppercase tracking-[0.35em] text-xs text-black/90">
      Artificial Intelligence & Deep Learning
    </p>

    {/* Main heading in white */}
    <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-lg">
      HRV-to-Biochemistry Estimation
      <br />
      & Translational Decision Support
    </h1>

    {/* Bottom description in black */}
    <p className="text-black/80 text-lg md:text-xl font-medium">
      Translating wearable signals into clinically interpretable, longitudinal decision support.
    </p>
  </div>
</div>


      {/* ================= YELLOW S-CURVE DIVIDER ================= */}
      <div className="-mt-20 relative z-0">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="w-full h-[140px]"
        >
          <path
            d="M0,80 
               C240,120 480,120 720,80 
               960,40 1200,40 1440,80 
               L1440,0 L0,0 Z"
            fill="#c59a0dff"
          />
        </svg>
      </div>

      {/* ================= GLASS CARD CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-32 space-y-24">

        <PremiumCard title="Scientific Orientation">
          Dr. Polisetty’s AI program bridges classical physiological reasoning
          with modern analytics. Systems emphasize interpretability, 
          longitudinal safety, and reproducible validation across time.
        </PremiumCard>

        <PremiumCard title="Proprietary Algorithms (IP-Protected)">
          Seventeen proprietary ML algorithms transform HRV-derived inputs 
          into rough estimates of blood biochemistry and physiological parameters. 
          <p className="text-gray-400 italic mt-2">
            Active IP protection — architectural details, datasets, and validation 
            reports shared under NDA collaboration.
          </p>
        </PremiumCard>

        <PremiumCard title="What the AI Enables">
          <ul className="list-disc list-inside space-y-2">
            <li>Docture Poly is a non-invasive, AI-assisted physiological signal analysis platform designed to support health assessment, wellness optimization, and translational research, operating as an adjunctive decision-support system and not as a standalone diagnostic device.</li>
            <li>Advanced Signal Stratification
The platform employs AI-assisted signal processing to stratify physiological signals across multiple frequency domains, exceeding conventional low-band models, to enable finer characterization of biological patterns.</li>
            <li>Organ-Oriented Functional Mapping
Using computational pattern recognition, the system supports organ-oriented signal mapping intended to provide functional insights into organ-level physiological states rather than diagnostic conclusions.</li>
            <li>Computational Biochemical Correlation Models
Advanced mathematical algorithms explore correlative relationships between physiological signals and metabolic markers (e.g., glucose trends, glycemic control indices, lipid patterns). These outputs are estimates for wellness tracking and research correlation only, not replacements for laboratory testing.</li>
          <li>Personalized Wellness Guidance Support
Based on aggregated signal patterns, the AI assists in generating personalized, non-prescriptive wellness recommendations, including physical activity guidance, nutritional planning, supplementation strategies, and traditional lifestyle practices.</li>
          <li>Neuro-Humoral Pattern Analysis
The platform supports analysis of autonomic and neuro-humoral signal trends associated with stress adaptation, recovery, and physiological regulation.</li>
          <li>Homeostatic Trend Monitoring
AI models assist in tracking organ-wise homeostatic trends over time, enabling longitudinal observation of physiological balance and variability.</li>
          <li>Systems Biology Perspective
By integrating multi-organ signals, inferred metabolic trends, and regulatory patterns, Docture Poly supports a systems-biology framework for understanding complex human physiology.</li>
          <li>Research & Translational Utility
The platform is intended for research, observational studies, and integrative health programs, supporting hypothesis generation, outcome tracking, and translational exploration</li>
          </ul>
        </PremiumCard>

        <PremiumCard title="Where This Is Headed">
          Integrated learning health stack: devices → AI translation → protocol automation 
          → clinician dashboards → outcomes analytics — supporting prevention, chronic optimization, and integrative end-stage care.
        </PremiumCard>

          {/* ===== CTAs ===== */}
<div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
  <button
    onClick={() => setShowForm(true)}
    className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold tracking-wide hover:scale-[1.05] transition duration-300 shadow-[0_20px_60px_rgba(255,193,7,0.4)]"
  >
    Collaborate on Validation & Outcomes
  </button>

  <button
    onClick={() => setShowForm(true)}
    className="px-10 py-4 rounded-full border border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-black hover:scale-[1.05] transition duration-300"
  >
    Request NDA-Based Technical Brief
  </button>
</div>
      </div>
      <DemoRequestModal open={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
}; 


export default AIDeepLearning;
