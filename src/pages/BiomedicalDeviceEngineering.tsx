import { useEffect, ReactNode, useState } from "react";


/* ================= PREMIUM GLASS CARD ================= */
function PremiumCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="relative rounded-3xl p-10 bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-xl border border-blue-400/20 shadow-[0_30px_80px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_120px_rgba(255,193,7,0.25)] transition duration-500">
      {/* LEFT yellow gradient line */}
      <div
        className="absolute left-0 top-6 bottom-6 w-[4px] rounded-full
                   bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-300
                   shadow-[0_0_24px_rgba(255,193,7,0.7)]"
      />
      <h3 className="text-2xl font-semibold text-white mb-4 pl-6">{title}</h3>
      <div className="text-gray-200 text-lg leading-relaxed pl-6">{children}</div>
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
export default function BiomedicalDeviceEngineering() {
   const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-[#07080b] overflow-hidden min-h-screen text-white">

      {/* ================= YELLOW GRADIENT BANNER ================= */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
        <div className="relative z-10 text-center px-6 max-w-5xl space-y-6">
          <p className="uppercase tracking-[0.35em] text-xs text-black">
            Biomedical Device Engineering
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">
            <span className="text-black">
              Translating Physiological Complexity
            </span>
            <br />
            <span className="text-white drop-shadow-lg">
              into Decision-Grade Personalization
            </span>
          </h1>
          <p className="text-black/80 text-lg md:text-xl font-medium">
            Engineering systems that convert high-dimensional physiological signals into clinician-usable, protocol-aligned insights.
          </p>
        </div>
      </div>

      {/* ================= YELLOW S-CURVE DIVIDER ================= */}
      <div className="-mt-24 relative z-0">
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 space-y-24">

        {/* ===== CORE PHILOSOPHY ===== */}
        <PremiumCard title="Core Engineering Philosophy">
          Dr. Polisetty’s device engineering work focuses on producing decision-grade guidance, not merely collecting data.
          Systems are designed to support preventive care, chronic disease optimization, and integrative protocol delivery
          through clinically meaningful signal interpretation.
        </PremiumCard>

        {/* ===== FLAGSHIP PLATFORMS ===== */}
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <div className="h-1 w-24 bg-amber-400 mx-auto rounded" />
            <h2 className="text-3xl font-serif text-white">Flagship Platforms</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Docture-Poly™',
                desc: 'A wearable + software system for maintaining homeostasis and delivering advanced integrated health systems.',
                note: '(Sai Ganga Panakeia)',
              },
              {
                title: 'K-Ring',
                desc: 'A wearable concept in the same ecosystem for continuous signal capture and longitudinal profiling.',
              },
              {
                title: 'Associated Devices & Pipelines',
                desc: 'Additional prototypes evolving around sensing, signal processing, and clinical usability.',
              },
            ].map((item, idx) => (
              <PremiumCard key={idx} title={item.title}>
                {item.desc} {item.note && <span className="text-gray-400">{item.note}</span>}
              </PremiumCard>
            ))}
          </div>
        </div>

        {/* ===== PERSONALIZATION ===== */}
        <PremiumCard title="What Personalization Looks Like in Practice">
          <ul className="list-disc ml-6 space-y-2 text-gray-200">
            <li>Diet composition and meal timing</li>
            <li>Physical fitness and exercise regimens</li>
            <li>Breathing exercises and pranayama protocols</li>
            <li>Home routines and supportive home remedies</li>
            <li>Personalized herbal formulations and supplement strategies (within protocol boundaries)</li>
          </ul>
        </PremiumCard>

        {/* ===== SYSTEM WORKFLOW ===== */}
        <PremiumCard title="How the System Works (High-Level)">
          Docture-Poly follows a data-driven workflow that collects physiological parameters at high frequency and
          applies analytics to generate individualized outputs aligned with Ayurveda-informed frameworks — while
          maintaining clinical usability and interpretability.
        </PremiumCard>

        {/* ===== FUTURE ===== */}
        <PremiumCard title="Where This Is Headed">
          An integrated device-plus-protocol ecosystem scaling toward an automated smart health city vision — where
          measurement, personalization, and outcomes tracking become continuous, coordinated, and clinically actionable
          across homes, clinics, and community health systems.
        </PremiumCard>

      {/* ===== CTAs ===== */}
<div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
  <button
    onClick={() => setShowForm(true)}
    className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold tracking-wide hover:scale-[1.05] transition duration-300 shadow-[0_20px_60px_rgba(255,193,7,0.4)]"
  >
    Request a Demo / Prototype Brief
  </button>

  <button
    onClick={() => setShowForm(true)}
    className="px-10 py-4 rounded-full border border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-black hover:scale-[1.05] transition duration-300"
  >
    Partner on Device + Clinical Deployment
  </button>
</div>


      </div>
       <DemoRequestModal open={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
}
