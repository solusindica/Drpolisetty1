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
      <div
        className="absolute left-0 top-6 bottom-6 w-[4px] rounded-full 
        bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-300 
        shadow-[0_0_24px_rgba(255,193,7,0.7)]"
      />

      <h3 className="text-2xl font-semibold text-white mb-4 pl-6">
        {title}
      </h3>

      <div className="text-gray-200 text-lg leading-relaxed pl-6 space-y-3">
        {children}
      </div>
    </div>
  );
}

/* ================= MAIN PAGE ================= */
export default function AdvancedCareProgram() {
  const [showPreBookingForm, setShowPreBookingForm] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-[#07080b] overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

        <div className="relative z-10 text-center px-6 max-w-5xl space-y-6">
          <p className="uppercase tracking-[0.4em] text-xs text-black">
            Personalized Advanced Care Program
          </p>

          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight">
            <span className="text-black">
              Continuity-Driven
            </span>
            <br />
            <span className="text-white drop-shadow-lg">
              Physician-Accountable Medicine
            </span>
          </h1>

          <p className="text-black/80 text-lg md:text-xl font-medium">
            For End-Stage & High-Complexity Medical Conditions
          </p>
        </div>
      </div>

      {/* ================= CURVE ================= */}
      <div className="-mt-24 relative z-0">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="w-full h-[140px]">
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

        <PremiumCard title="What This Program Is">
          <p>
            The Personalized Advanced Care Program (PAC-P) is a
            <strong> continuity-of-care model</strong>, not episodic consultation.
          </p>
          <p>
            It is designed for:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>End-stage cardiac, metabolic, neurological, and systemic illnesses</li>
            <li>High-net-worth individuals requiring intense physician involvement</li>
            <li>Patients needing long-term stabilization, regeneration, and quality-of-life restoration</li>
          </ul>
          <p>
            I remain personally involved, accountable, and accessible—working alongside
            a trained clinical team that executes under my supervision.
          </p>
        </PremiumCard>

        <PremiumCard title="What You Receive">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>12 hours per month</strong> of direct physician consultation (~150 minutes/week)</li>
            <li>Detailed clinical review and systems assessment</li>
            <li>Docture poly analysis & Nadi Pariksha</li>
            <li>Explanation to patient and family</li>
            <li>Continuous protocol refinement</li>
          </ul>
        </PremiumCard>

        <PremiumCard title="24×7 Inter-Consultation Access">
          <ul className="list-disc pl-6 space-y-2">
            <li>Priority access for urgent guidance</li>
            <li>Lab interpretation and symptom escalation</li>
            <li>Decision support during acute moments</li>
          </ul>
        </PremiumCard>

        <PremiumCard title="Advanced Treatment Design">
          <ul className="list-disc pl-6 space-y-2">
            <li>Personalized regenerative and integrative protocols</li>
            <li>Disease-stage specific strategies</li>
            <li>Continuous outcome tracking and modification</li>
          </ul>
        </PremiumCard>

        <PremiumCard title="Team Supervision & Continuity">
          <ul className="list-disc pl-6 space-y-2">
            <li>Oversight of physicians, therapists, diagnostics, and care teams</li>
            <li>Ensures consistency, safety, and protocol fidelity</li>
          </ul>
        </PremiumCard>

        <PremiumCard title="Outcome Ownership">
          <p>This is not fragmented care.</p>
          <p className="font-semibold text-amber-300">
            This is single-point accountability medicine.
          </p>
        </PremiumCard>

        <PremiumCard title="Clinical Outcomes (Representative Trends)">
          <ul className="list-disc pl-6 space-y-2">
            <li>Patients with EF 20–30% routinely improve to 45–55%</li>
            <li>Several stabilize near-normal function over time</li>
            <li>400+ patients managed through structured systems care</li>
          </ul>
        </PremiumCard>

        <PremiumCard title="Program Fee">
          <p className="text-2xl font-semibold text-white">₹15,00,000 per month</p>
          <p>
            This reflects direct physician time, continuous availability,
            clinical oversight, and longitudinal accountability.
          </p>
          <p>
            If billed conventionally, this level of care exceeds ₹17–18 lakhs per month.
            The program is purposefully structured at ₹15 lakhs to remain mission-aligned.
          </p>
        </PremiumCard>

         <PremiumCard title="Pre-Booking Privilege">
          <p className="text-2xl font-semibold text-white">₹1,00,000 per</p>
          <p>
           Clients who confirm intent through an early pre - booking receive a  <span className="text-amber-300 font-semibold"> 30% reduction </span>
    on the standard program fee.
          </p>
          <p>
             This pre-booking requires a fully adjustable
    <strong> ₹1,00,000 confirmation amount</strong>,
    which is applied toward the final engagement billing.
           </p>
        </PremiumCard>

        <PremiumCard title="Final Note">
          <p className="italic text-amber-300">
            This program exists because some lives deserve more time,
            more thought, and more responsibility than standard medicine can offer.
          </p>
        </PremiumCard>


{/* ===== CTA BUTTONS ===== */}
<div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">

  {/* DOWNLOAD BROCHURE */}
  <a
    href="/PAC-P-Brochure.pdf"   // put PDF in public folder
    download
    className="px-10 py-4 rounded-full
               border border-amber-400/70
               text-amber-400
               hover:bg-amber-400
               hover:text-black
               transition duration-300
               text-center"
  >
    Download Program Brochure
  </a>

  {/* PRE-BOOKING */}
  <button
    onClick={() => setShowPreBookingForm(true)}
    className="px-10 py-4 rounded-full
               bg-gradient-to-r from-amber-400 to-yellow-500
               text-black font-semibold
               hover:scale-[1.05]
               transition duration-300
               shadow-[0_20px_60px_rgba(255,193,7,0.4)]"
  >
    Pre-Book Now (30% Discount)
  </button>

</div>

<p className="text-center text-sm text-gray-400 pt-4">
  Pre-booking confirms early intent and includes a <span className="text-amber-300 font-semibold">30% program fee benefit</span>.
</p>

      </div>
      {/* ===== PRE-BOOKING FORM MODAL ===== */}
{showPreBookingForm && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
    <div className="relative max-w-2xl w-full rounded-3xl p-10
                    bg-gradient-to-br from-blue-900/40 to-blue-800/30
                    backdrop-blur-xl border border-blue-400/30
                    shadow-[0_40px_120px_rgba(0,0,0,0.8)]
                    max-h-[90vh] overflow-y-auto">

      {/* Close */}
      <button
        onClick={() => setShowPreBookingForm(false)}
        className="absolute top-5 right-5 text-gray-300 hover:text-amber-400 text-xl"
      >
        ✕
      </button>

      <h3 className="text-2xl font-semibold text-white mb-2 text-center">
        Pre-Booking Request
      </h3>

      <p className="text-center text-amber-300 text-sm mb-8">
        Pre-booking qualifies for a <strong>30% program fee benefit</strong>
      </p>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Pre-booking request submitted successfully");
          setShowPreBookingForm(false);
        }}
      >
        <input className="premium-input bg-white text-black" placeholder="Full Name" required />
        <input type="email" className="premium-input bg-white text-black" placeholder="Email Address" required />
        <input type="tel" className="premium-input bg-white text-black" placeholder="Phone Number" required />

       <select
  className="premium-input bg-white text-black"
  required
  defaultValue=""
>
  <option value="" disabled>
    Select Gender
  </option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>


        <input type="date" className="premium-input bg-white text-black" required />

        <input
          className="premium-input bg-white text-black"
          placeholder="Primary Condition / Concern"
        />

        <div className="md:col-span-2">
          <textarea
            className="premium-input resize-none h-28 w-full bg-white text-black"
            placeholder="Brief description or intent for pre-booking"
          />
        </div>

        <div className="md:col-span-2 pt-4">
          <button
            type="submit"
            className="w-full px-10 py-4 rounded-full
                       bg-gradient-to-r from-amber-400 to-yellow-500
                       text-black font-semibold
                       hover:scale-[1.05]
                       transition duration-300
                       shadow-[0_20px_60px_rgba(255,193,7,0.4)]"
          >
            Submit Pre-Booking Request
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </section>
  );
}
