import { useNavigate } from "react-router-dom";
import {
  Mail,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Send,
  Building,
  Microscope,
  DollarSign,
  Presentation,
  Crown,
} from "lucide-react";

export default function Contact() {
  const navigate = useNavigate();

  const contactTypes = [
    {
      title: "Collaboration",
      icon: Building,
      description: "Research partnerships & institutional collaboration",
    },
    {
      title: "Investments",
      icon: DollarSign,
      description: "Healthcare innovation & medical device funding",
    },
    {
      title: "Research",
      icon: Microscope,
      description: "Joint studies & translational research programs",
    },
    {
      title: "Speaking",
      icon: Presentation,
      description: "Keynote talks & conference presentations",
    },
  ];

  const locations = [
    { city: "Baltimore, USA", description: "Johns Hopkins University" },
    { city: "Toronto, Canada", description: "Panacea Nova Inc." },
    { city: "Moscow, Russia", description: "ANO Research Institute" },
    { city: "Hyderabad, India", description: "Sai Ganga Panakeia" },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Connect & Collaborate
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join the mission to transform global healthcare through innovation
            and collaboration
          </p>
        </div>

        {/* ================= LEFT + RIGHT ================= */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* LEFT */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-3xl p-10">
            <h3 className="font-serif text-3xl font-bold text-white mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Mail size={24} className="text-black" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href="mailto:drprs@sgprs.com"
                    className="text-white text-lg hover:text-amber-400 transition"
                  >
                    drprs@sgprs.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Phone size={24} className="text-black" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+917331109988"
                    className="text-white text-lg hover:text-blue-400 transition"
                  >
                    +91 7331109988
                  </a>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="border-t border-gray-800 pt-6 mt-6">
                <p className="text-gray-400 text-sm mb-4">
                  Connect on Social Media
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://in.linkedin.com/in/drprs"
                    target="_blank"
                    className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition"
                  >
                    <Linkedin className="text-white" />
                  </a>
                   <a
  href="https://www.instagram.com/dr.ravishankar.polisetty.sgp/?hl=en"
  className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition"
>
  <Instagram className="text-white" />
</a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center hover:scale-110 transition"
                  >
                    <Send className="text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-3xl p-10">
            <h3 className="font-serif text-3xl font-bold text-white mb-8">
              Global Locations
            </h3>

            <div className="space-y-6">
              {locations.map((loc, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <MapPin className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      {loc.city}
                    </p>
                    <p className="text-gray-400">{loc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= VIP SECTION ================= */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-gradient-to-br from-yellow-900/20 via-amber-900/10 to-black border border-amber-500/40 rounded-3xl p-10 text-center">

            <Crown className="mx-auto mb-6 text-amber-400 drop-shadow-lg" size={40} />

            <h4 className="text-2xl font-bold text-amber-400 mb-4">
              VIP Consultation
            </h4>

            <p className="text-gray-300 text-lg mb-6">
              Exclusive one-on-one consultation with Dr. Polisetty for
              celebrities, business leaders, and global dignitaries.
            </p>

            <p className="text-3xl font-bold text-amber-300 mb-8">
              ₹15,00,000{" "}
              <span className="text-gray-400 text-base font-normal">
                per Month
              </span>
            </p>

            <ul className="mb-8 space-y-5 list-disc list-inside">
                <li className="text-2xl font-bold text-amber-400">
                  Private executive assessment
                  <span className="block text-base font-medium text-white mt-1">
                    (90–120 min + report)
                  </span>
                </li>

                <li className="text-2xl font-bold text-amber-400">
                  90-day restoration program
                  <span className="block text-base font-medium text-white mt-1">
                    (weekly touchpoints)
                  </span>
                </li>

                <li className="text-2xl font-bold text-amber-400">
                  Family office retainer
                  <span className="block text-base font-medium text-white mt-1">
                    (priority access, travel coordination)
                  </span>
                </li>
              </ul>

            <p className="text-gray-400 text-sm italic mt-4">
              Limited availability • By application only
            </p>
          </div>
        </div>

        {/* ================= CONTACT TYPES ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactTypes.map((type, i) => {
            const Icon = type.icon;
            return (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-2xl p-8 text-center hover:shadow-2xl hover:border-amber-500/60 transition"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-black" size={32} />
                </div>
                <h3 className="font-bold text-white text-xl mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-400 text-sm">{type.description}</p>
              </div>
            );
          })}
        </div>
        {/* ================= CALL TO ACTION ================= */}
<div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-amber-500/30 rounded-3xl p-12 text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    Ready to Transform Healthcare Together?
  </h2>
  <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6">
    Whether you're interested in research collaboration, investment opportunities, speaking engagements, or exploring Docture-Poly™, Dr. Polisetty welcomes meaningful partnerships that advance the future of medicine.
  </p>
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="border border-amber-500 text-amber-500 px-6 py-3 rounded-full font-semibold hover:bg-amber-500 hover:text-black transition"
  >
    Back to Top
  </button>
</div>

        

        {/* ================= FOOTER ================= */}
        <div className="border-t border-gray-800 pt-12 text-center">
          <p className="text-gray-400">
            © 2024 Dr. Ravishankar Polisetty. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
