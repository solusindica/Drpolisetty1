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

      {/* LEFT yellow gradient line (changed from top) */}
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
export default function RegenerativeMedicine() {
    const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-[#07080b] overflow-hidden">

      {/* ================= YELLOW GRADIENT BANNER ================= */}
      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

        <div className="relative z-10 text-center px-6 max-w-5xl space-y-6">
          <p className="uppercase tracking-[0.4em] text-xs text-black">
            Regenerative Medicine
          </p>

          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight">
            <span className="text-black">
              Demonstrated Tissue Regeneration
            </span>
            <br />
            <span className="text-white drop-shadow-lg">
              in Preclinical Models
            </span>
          </h1>

          <p className="text-black/80 text-lg md:text-xl font-medium">
            Heart • Kidney • Liver • Pancreas • Brain
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

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-32 space-y-24">

        <PremiumCard title="Evidence-Informed">
          Bench models validated through structured experimental and
          translational pathways, emphasizing reproducibility, safety,
          and biological fidelity.
        </PremiumCard>

        <PremiumCard title="Bench-to-Bedside Discipline">
          Dr. Ravishankar Polisetty’s regenerative medicine framework follows a
          rigorous bench-to-bedside approach: defining biological problems,
          demonstrating regeneration in controlled models, validating
          micro-architecture and functional recovery, and translating findings
          into safety-bounded clinical pathways (I-Prism).
        </PremiumCard>

   <div className="space-y-12">
  {/* Yellow line above heading */}
  <div className="h-1 w-24 bg-amber-400 mx-auto rounded"></div>

  <h2 className="text-3xl font-serif text-white text-center">
    Preclinical Regeneration Demonstrations
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { organ: "Heart", desc: "In experimental rat models of post-myocardial infarction, Dr. Polisetty demonstrated subtotal regeneration of cardiac tissue, including structural restoration, using his proprietary translational methodology." },
      { organ: "Kidney", desc: "In partial nephrectomy animal models, renal tissue regeneration was successfully demonstrated, whereas no regeneration was observed following total nephrectomy—highlighting the biological limits and specificity of the regenerative process." },
      { organ: "Liver", desc: "Using a clinically derived methodology, complete liver regeneration was demonstrated in subtotal hepatectomy models, with clear evidence of hepatic structural restoration." },
      { organ: "Pancreas", desc: "In subtotal pancreatectomy animal models, total pancreatic regeneration was demonstrated, representing a first-of-its-kind achievement globally in experimental regenerative research." },
      { organ: "Brain", desc: "In models of hypoxic-ischemic brain injury leading to coagulative necrosis, application of Dr. Polisetty’s proprietary mineral-based clinical methodology resulted in complete neuronal tissue regeneration, demonstrated for the first time in the world." },
    ].map((item, index) => (
      <PremiumCard key={index} title={item.organ}>
        {item.desc}
      </PremiumCard>
    ))}
  </div>
</div>


        <PremiumCard title="Down to the Micro-Architecture">
          Regeneration assessment extends beyond gross morphology, emphasizing
          restoration of native tissue planes, cellular organization,
          micro-structural integrity, and architecture consistent with
          physiological norms.
        </PremiumCard>

        <PremiumCard title="Where This Is Headed">
          A scalable, evidence-building regenerative framework integrated with
          clinical delivery platforms and institutional collaborations —
          converting regenerative science into operational medicine.
        </PremiumCard>

              {/* ===== CTAs ===== */}
<div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
  <button
    onClick={() => setShowForm(true)}
    className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold tracking-wide hover:scale-[1.05] transition duration-300 shadow-[0_20px_60px_rgba(255,193,7,0.4)]"
  >
     Request Scientific Dossier
  </button>

  <button
    onClick={() => setShowForm(true)}
    className="px-10 py-4 rounded-full border border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-black hover:scale-[1.05] transition duration-300"
  >
      Institutional Collaboration
  </button>
</div>

      </div>
       <DemoRequestModal open={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
}

 