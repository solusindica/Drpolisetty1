import { useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";


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
 const navigate = useNavigate(); 
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


      <br></br>
      <br></br>
{/* ===== CONTEXT HEADING ===== */}
<div className="text-center space-y-4 max-w-4xl mx-auto">
  <div className="h-1 w-20 bg-amber-400 mx-auto rounded" />
  <h2 className="text-3xl font-serif text-white">
    Important Context
  </h2>
  <p className="text-gray-400 text-base">
    Please read carefully before reviewing the premium engagement details.
  </p>
</div>
 <div className="max-w-6xl mx-auto -my-8">
  <br></br>

  <br></br>
  <br></br>

      {/* ===== PREFACE / CONTEXT ===== */}
<PremiumGlassCard title="Before You Proceed">
  <p className="italic text-gray-300">
    Before proceeding to engage me personally I want you to read the following with empathy and
    attention
  </p>

  <h4 className="text-xl font-semibold text-amber-300 pt-6">
    Building a New Health Ecosystem for End-Stage Diseases
  </h4>

  <p>
    I, Dr. Ravishankar Polisetty, along with my team, am engaged in building a comprehensive, future-
    ready health ecosystem rooted in India’s ancient scientific knowledge systems, carefully translated
    into modern clinical, digital, and data-driven frameworks. My purpose is clear and unwavering: to
    save lives wherever possible, and where cure is not feasible, to meaningfully improve quality of
    life for patients with end-stage diseases.
  </p>

  <p>
    This work goes far beyond individual clinical consultations. It represents a long-term commitment to
    building systems that can serve not only India, but the world.
  </p>

  <h4 className="text-xl font-semibold text-amber-300 pt-6">
    Our Commitments
  </h4>

  <p>
    Together with my colleagues and collaborators, I am deeply involved in:
  </p>

  <h5 className="text-lg font-semibold text-white pt-4">
    Training the Next Generation of Doctors and Professionals
  </h5>

  <p>
    I firmly believe that transforming healthcare requires transforming education first. To this end, I
    have taken concrete institutional steps to ensure that the next generation is trained correctly, early,
    and responsibly.
  </p>

  <p>
    As part of this commitment, we have formally signed up with IIT Hyderabad to design and run
    structured programs aimed at training the next generation of doctors, alternative practitioners,
    CAM specialists, engineers, and life-sciences professionals. These programs are designed to bridge
    the long-standing gap between ancient Indian medical knowledge and modern scientific and
    technological frameworks.
  </p>

  <p>
    Our focus is not merely on teaching Ayurveda or alternative medicine in isolation, but on
    translational Ayurveda—expressing ancient insights in the language of biology, systems medicine,
    mathematics, data science, and clinical outcomes. This ensures that future practitioners are not only
    compassionate, but also scientifically grounded and globally relevant.
  </p>

  <h5 className="text-lg font-semibold text-white pt-4">
    Running Certified Courses and Early Exposure for Young Minds
  </h5>

  <p>
    In addition to professional and postgraduate training, I strongly believe that exposure must begin
    early. Waiting until medical school is often too late to shape foundational thinking.
  </p>

  <p>
    Under this banner, we are designing and planning certified introductory programs for high-school
    students and pre-medical learners, enabling them to:
  </p>

  <ul className="list-disc list-inside space-y-2">
    <li>Understand the principles of translational Ayurveda</li>
    <li>Learn how ancient medical logic maps onto modern biology</li>
    <li>Develop early familiarity with research thinking and scientific questioning</li>
    <li>Appreciate integrative medicine as a legitimate, rigorous discipline</li>
  </ul>

  <p>
    By introducing these concepts early, we aim to nurture a generation that does not see artificial
    boundaries between modern medicine, Ayurveda, engineering, or data science—but instead sees
    them as parts of a unified healthcare continuum.
  </p>

  <h5 className="text-lg font-semibold text-white pt-4">
    Strengthening and Automating Primary and Secondary Healthcare
  </h5>

  <p>
    For healthcare to be truly impactful, it must work at scale and at the grassroots.
  </p>

  <ul className="list-disc list-inside space-y-2">
    <li>Enable early detection and continuous monitoring</li>
    <li>Standardize care pathways using intelligent protocols</li>
    <li>Seamlessly escalate patients from primary to secondary to tertiary care</li>
    <li>Reduce dependency on late-stage interventions</li>
  </ul>

  <p>
    Automation and protocolization at these levels are critical if end-stage disease burden is to be
    reduced meaningfully and sustainably.
  </p>

  <h5 className="text-lg font-semibold text-white pt-4">
    Advanced Medical Devices and Robotics Ecosystem
  </h5>

  <p>
    Parallel to clinical and academic efforts, we are actively building an advanced medical-device
    ecosystem.
  </p>

  <ul className="list-disc list-inside space-y-2">
    <li>Objective and data-driven</li>
    <li>Affordable and scalable</li>
    <li>Deeply integrated with clinical decision systems</li>
    <li>Capable of supporting personalized and precision medicine</li>
  </ul>

  <p>
    Our goal is not to merely import or imitate existing technologies, but to design indigenous,
    context-aware medical devices that align with India’s clinical realities while meeting global
    standards.
  </p>

  <h5 className="text-lg font-semibold text-white pt-4">
    Building an AI-Driven Healthcare System from First Principles
  </h5>

  <p>
    Our AI journey is not an afterthought—it is built from first principles derived from translational
    Ayurvedic research.
  </p>

  <p>
    As part of this effort, I have personally conceptualized and written approximately 17 novel
    machine-learning algorithms, specifically tailored for healthcare and end-stage disease
    modeling.
  </p>

  <ul className="list-disc list-inside space-y-2">
    <li>Capture longitudinal disease trajectories</li>
    <li>Model complex homeostatic imbalances</li>
    <li>Support predictive and preventive decision-making</li>
    <li>Integrate clinical data with biological and behavioral signals</li>
  </ul>

  <p>
    This layered approach places us well ahead of most existing global healthcare AI ecosystems.
  </p>

  <p>
    Each of these initiatives is pioneering in nature and demands time, focus, intellectual depth, and
    sustained personal involvement. My time, and the time of senior collaborators such as Docture Poly
    is therefore both limited and extremely valuable.
  </p>
</PremiumGlassCard>
</div>

<br></br>
<br></br>
<br></br>
<br></br>
<div className="text-center space-y-8 max-w-4xl mx-auto">
  <div className="h-1 w-20 bg-amber-400 mx-auto rounded" />
  <h2 className="text-3xl font-serif text-white">
  Professional Engagement Fees
  </h2>
</div>
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 space-y-16">
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

  {/* EXISTING BUTTON */}
  <button
    onClick={() => setShowForm(true)}
    className="px-10 py-4 rounded-full
               bg-gradient-to-r from-amber-400 to-yellow-500
               text-black font-semibold tracking-wide
               hover:scale-[1.05] transition duration-300
               shadow-[0_20px_60px_rgba(255,193,7,0.4)]"
  >
    Request VIP Consultation
  </button>

  {/* NEW BUTTON — OPENS PAC-P PAGE */}
  <button
    onClick={() => navigate("/advancedcareProgram")}
    className="px-10 py-4 rounded-full
               border border-amber-400/60
               text-amber-400
               hover:bg-amber-400
               hover:text-black
               hover:scale-[1.05]
               transition duration-300"
  >
  Advanced care Program
  </button>

</div>


        {/* ===== VIP FORM MODAL (GLASS STYLE) ===== */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="relative max-w-2xl w-full rounded-3xl p-10
                            bg-gradient-to-br from-blue-900/40 to-blue-800/30
                            backdrop-blur-xl border border-blue-400/30
                            shadow-[0_40px_120px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-5 right-5 text-gray-300 hover:text-amber-400 text-xl"
              >
                ✕
              </button>

              <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                VIP Consultation Form
              </h3>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted successfully");
                setShowForm(false);
              }}>
                <input className="premium-input bg-white text-black" placeholder="Full Name" required />
                
                <input type="email" className="premium-input bg-white text-black" placeholder="Email Address" required />

                <input type="tel" className="premium-input bg-white text-black" placeholder="Phone Number" required />

                <select className="premium-input bg-white text-black" required>
                  <option value="" disabled selected>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <input type="date" className="premium-input bg-white text-black" placeholder="Date of Birth" required />

                <input className="premium-input bg-white text-black" placeholder="Disease / Health Concern" />

                <div className="md:col-span-2">
                  <textarea
                    className="premium-input resize-none h-28 w-full bg-white text-black"
                    placeholder="Message / Brief Description of Your Inquiry"
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
                    Submit VIP Request
                  </button>
                </div>
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
