import { useEffect, useState, ReactNode } from "react";

/* ================= PREMIUM GLASS CARD ================= */
function PremiumGlassCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative rounded-3xl p-10 bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-xl border border-blue-400/20 shadow-[0_30px_80px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_120px_rgba(255,193,7,0.25)] transition duration-500">
      {/* LEFT GOLD GRADIENT LINE */}
      <div
        className="absolute left-0 top-6 bottom-6 w-[4px] rounded-full
                   bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-300
                   shadow-[0_0_24px_rgba(255,193,7,0.7)]"
      />
      <h3 className="text-2xl font-semibold text-white mb-4 pl-6">{title}</h3>
      <div className="text-gray-200 text-lg leading-relaxed pl-6 space-y-3">
        {children}
      </div>
    </div>
  );
}

/* ================= PREMIUM CARD PAGE ================= */
export default function PremiumCard() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-[#07080b] overflow-hidden min-h-screen text-white">
      {/* ================= GOLD GRADIENT HERO ================= */}
      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
        <div className="relative z-10 text-center px-6 max-w-5xl space-y-6">
          <p className="uppercase tracking-[0.35em] text-xs text-black">
            Exclusive Engagement
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight">
            <span className="text-black">VIP Client Program</span>
            <br />
            <span className="text-white drop-shadow-lg">Monthly Retainer</span>
          </h1>
          <p className="text-black/80 text-lg md:text-xl font-medium">
            A highly personalized, discreet engagement focused on sustained
            improvement in quality of life through deep insight and precision guidance.
          </p>
        </div>
      </div>

      {/* ================= GOLD CURVE DIVIDER ================= */}
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 space-y-24">
        {/* ===== INVESTMENT ===== */}
        <PremiumGlassCard title="Monthly Investment">
          <p><strong>India:</strong> INR 15,00,000 / month</p>
          <p><strong>United States:</strong> USD 15,000 / month</p>
          <p><strong>European Union:</strong> EUR 15,000 / month</p>
          <p><strong>United Kingdom:</strong> GBP 15,000 / month</p>
          <p className="text-gray-400 text-sm pt-2">
            Applicable taxes, bank or wire charges, and third-party costs are
            additional unless explicitly included in writing.
          </p>
        </PremiumGlassCard>

        {/* ===== WHAT YOU RECEIVE ===== */}
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <div className="h-1 w-24 bg-amber-400 mx-auto rounded" />
            <h2 className="text-3xl font-serif text-white">
              What You Receive Each Month
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PremiumGlassCard title="Dual Pulse Assessment (Nadi Pariksha)">
              <p>Manual Nadi Pariksha personally performed by Dr. Polisetti.</p>
              <p>
                Secondary pulse assessment using <strong>Docture Poly</strong>,
                conducted by a trained assistant.
              </p>
              <p>Consolidated findings translated into a clear, personalized action plan.</p>
            </PremiumGlassCard>

            <PremiumGlassCard title="Deep Personalized Insight">
              <p>Root-cause–oriented review mapping your reported signs and symptoms.</p>
              <p>Clear identification of contributing factors and priority areas.</p>
              <p>Structured sequencing — what to address first, next, and later — with month-to-month refinement.</p>
            </PremiumGlassCard>

            <PremiumGlassCard title="Personalized Fitness & Lifestyle Regimen">
              <p>Customized movement and fitness routines.</p>
              <p>Recovery, sleep, and restoration practices.</p>
              <p>Lifestyle structuring with walk-through support to ensure correct and consistent implementation.</p>
            </PremiumGlassCard>

            <PremiumGlassCard title="Dedicated Time With Dr. Polisetti">
              <p>Up to <strong>9 hours per month</strong> of direct VIP engagement.</p>
              <p>Includes scheduled sessions, structured check-ins, and implementation guidance.</p>
              <p>All calls and telephonic consultations count toward the monthly total.</p>
            </PremiumGlassCard>

            <PremiumGlassCard title="VIP Direct Access Line">
              <p>Dedicated VIP number routed directly to Dr. Polisetti.</p>
              <p>Available <strong>24/7 for urgent needs</strong>, handled with priority.</p>
              <p>Non-urgent matters addressed during scheduled touchpoints.</p>
            </PremiumGlassCard>
          </div>
        </div>

        {/* ===== ENGAGEMENT DURATION ===== */}
        <PremiumGlassCard title="Typical Engagement Duration">
          <p>This is a monthly retainer designed for meaningful, sustained improvement in quality of life.</p>
          <p>Many clients engage for <strong>9 to 12 months</strong>, depending on goals, baseline condition, and consistency.</p>
          <p>The plan is reviewed and recalibrated each month based on progress.</p>
        </PremiumGlassCard>

        {/* ===== CTAs ===== */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
          <button
            onClick={() => setShowForm(true)}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold tracking-wide hover:scale-[1.05] transition duration-300 shadow-[0_20px_60px_rgba(255,193,7,0.4)]"
          >
            Request VIP Consultation
          </button>
         
        </div>

        {/* ===== VIP FORM MODAL ===== */}
        {showForm && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
    <div className="bg-gray-900 rounded-3xl p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
      
      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-amber-400"
      >
        ×
      </button>

      <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">
        VIP Consultation Form
      </h3>

      <form
        className="space-y-4 text-white"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted successfully");
        }}
      >
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1">Phone</label>
          <input
            type="tel"
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="+91 1234567890"
          />
        </div>

        <div>
          <label className="block mb-1">Gender</label>
          <select
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Date of Birth</label>
          <input
            type="date"
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1">Disease / Health Concern</label>
          <textarea
            required
            rows={3}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="Describe your health concerns"
          />
        </div>

        <div>
          <label className="block mb-1">Message</label>
          <textarea
            rows={4}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="Additional details (optional)"
          />
        </div>

        {/* ✅ SUBMIT BUTTON — NOW ALWAYS VISIBLE */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-black rounded-full font-semibold tracking-wide hover:scale-[1.03] transition duration-300 shadow-[0_15px_40px_rgba(255,193,7,0.4)]"
        >
          Submit VIP Request
        </button>
      </form>
    </div>
  </div>
)}

        {/* ===== SAFETY FOOTER ===== */}
        <p className="text-center text-gray-500 text-sm max-w-3xl mx-auto pt-10">
          This program provides personalized wellness guidance and lifestyle support.
          It is not emergency care and does not replace licensed medical diagnosis or treatment.
          Individual outcomes vary based on compliance and complexity.
        </p>
      </div>
    </section>
  );
}
