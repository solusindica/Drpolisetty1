import { useState } from "react";
import { 
  Mail, Linkedin, Twitter, MapPin, Phone, Send, 
  Building, Microscope, DollarSign, Presentation, Crown 
} from 'lucide-react';


export default function Contact() {
  const contactTypes = [
    { title: 'Collaboration', icon: Building, description: 'Research partnerships & institutional collaboration' },
    { title: 'Investments', icon: DollarSign, description: 'Healthcare innovation & medical device funding' },
    { title: 'Research', icon: Microscope, description: 'Joint studies & translational research programs' },
    { title: 'Speaking', icon: Presentation, description: 'Keynote talks & conference presentations' },
  ];

  const locations = [
    { city: 'Baltimore, USA', description: 'Johns Hopkins University' },
    { city: 'Toronto, Canada', description: 'Panacea Nova Inc.' },
    { city: 'Moscow, Russia', description: 'ANO Research Institute' },
    { city: 'Hyderabad, India', description: 'Sai Ganga Panakeia' },
  ];
  const [openAppointment, setOpenAppointment] = useState(false);
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  phone: "",
  age: "",
  gender: "",
  email: "",
  disease: "",
  location: "",
  date: "",
  time: "",
});

 const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const mailBody = `
VIP Appointment Request

Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Age: ${formData.age}
Gender: ${formData.gender}
Email: ${formData.email}
Disease: ${formData.disease}
Location: ${formData.location}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
`;

  window.location.href = `mailto:drprs@sgprs.com?subject=VIP Appointment Request&body=${encodeURIComponent(
    mailBody
  )}`;

  setOpenAppointment(false);
};


  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Connect & Collaborate
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join the mission to transform global healthcare through innovation and collaboration
          </p>
        </div>

        {/* ================= LEFT + RIGHT CONTACT SECTIONS ================= */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* LEFT: CONTACT DETAILS */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-3xl p-10">
            <h3 className="font-serif text-3xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-black" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a href="mailto:contact@drpolisetty.com" className="text-white text-lg hover:text-amber-400 transition-colors">
                    drprs@sgprs.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-black" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a href="tel:+1234567890" className="text-white text-lg hover:text-blue-400 transition-colors">
                    +91 7331109988
                  </a>
                </div>
              </div>

              {/* SOCIAL MEDIA */}
              <div className="border-t border-gray-800 pt-6 mt-6">
                <p className="text-gray-400 text-sm mb-4">Connect on Social Media</p>
                <div className="flex space-x-4">
                  <a href="https://in.linkedin.com/in/drprs" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Linkedin size={24} className="text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Twitter size={24} className="text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Send size={24} className="text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: LOCATIONS */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-3xl p-10">
            <h3 className="font-serif text-3xl font-bold text-white mb-8">Global Locations</h3>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">{location.city}</p>
                    <p className="text-gray-400">{location.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= VIP SECTION ================= */}
        <div className="text-center mb-12">
          <p className="text-amber-400 tracking-wider text-sm font-semibold mb-2">
            LET’S CONNECT
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Shape the Future Together
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-20 relative">
          <div className="bg-gradient-to-br from-yellow-900/20 via-amber-900/10 to-black 
                          border border-amber-500/40 rounded-3xl p-10 text-center 
                          shadow-xl shadow-amber-500/10 relative">
            
            {/* VIP Crown Icon */}
            <div className="absolute -top--0 left-1/2 transform -translate-x-1/2">
              <Crown className="h-10 w-10 text-amber-400 drop-shadow-[0_0_10px_rgba(255,194,0,0.7)]" />
            </div>

            <h4 className="text-2xl font-bold text-amber-400 mb-4 mt-8">
              VIP Consultation
            </h4>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
              Exclusive one-on-one consultation with Dr. Polisetty for celebrities, business leaders, and global dignitaries.
            </p>

            <p className="text-3xl font-bold text-amber-300 mb-8">
              ₹15,00,000 <span className="text-gray-400 text-base font-normal">per Month</span>
            </p>

         <button
  onClick={() => setOpenAppointment(true)}
  className="bg-gradient-to-r from-amber-500 to-yellow-600 
             text-black px-10 py-4 rounded-full font-semibold 
             hover:shadow-2xl hover:shadow-amber-500/50 
             transition-all duration-300 inline-block mb-4"
>
  Book VIP Appointment
</button>


            <p className="text-gray-400 text-sm italic">
              Limited availability • By application only
            </p>
          </div>
        </div>

        {/* ================= CONTACT TYPES SECTION MOVED TO BOTTOM ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-2xl p-8 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-black" />
                </div>
                <h3 className="font-bold text-white text-xl mb-3">{type.title}</h3>
                <p className="text-gray-400 text-sm">{type.description}</p>
              </div>
            );
          })}
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-purple-500/10 border-2 border-amber-500/50 rounded-3xl p-12 text-center">
          <h3 className="font-serif text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare Together?
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Whether you're interested in research collaboration, investment opportunities, speaking engagements, or exploring Docture-Poly™, Dr. Polisetty welcomes meaningful partnerships that advance the future of medicine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          

            <a
              href="#hero"
              className="border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-full font-semibold hover:bg-amber-500 hover:text-black transition-all duration-300"
            >
              Back to Top
            </a>
          </div>
        </div>

      </div>

      {/* ================= FOOTER ================= */}
      <div className="mt-20 border-t border-gray-800 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Dr. Ravishankar Polisetty. All rights reserved.
            </p>
            <p className="text-gray-400 text-center md:text-right">
              Transforming human health through innovation & ancient wisdom
            </p>
          </div>
        </div>
      </div>

{/* ================= APPOINTMENT MODAL ================= */}
{openAppointment && (
  <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
    <div className="bg-gray-900 border border-amber-500/40 rounded-3xl max-w-2xl w-full p-8 relative">

      {/* Close Button */}
      <button
        onClick={() => setOpenAppointment(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        ✕
      </button>

      <h3 className="text-3xl font-serif font-bold text-amber-400 mb-6 text-center">
        VIP Appointment Form
      </h3>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input name="firstName" required placeholder="First Name" onChange={handleChange}
          className="p-3 rounded bg-black border border-gray-700 text-white" />

        <input name="lastName" required placeholder="Last Name" onChange={handleChange}
          className="p-3 rounded bg-black border border-gray-700 text-white" />

        <input name="phone" required placeholder="Phone Number" onChange={handleChange}
          className="p-3 rounded bg-black border border-gray-700 text-white" />

        <input name="age" type="number" required placeholder="Age" onChange={handleChange}
          className="p-3 rounded bg-black border border-gray-700 text-white" />

        <select name="gender" required onChange={handleChange}
          className="p-3 rounded bg-black border border-gray-700 text-white">
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input name="email" type="email" required placeholder="Email" onChange={handleChange}
          className="p-3 rounded bg-black border border-gray-700 text-white" />

        <input name="location" placeholder="Location" onChange={handleChange}
          className="p-3 rounded bg-black border border-gray-700 text-white col-span-2" />

        <textarea name="disease" placeholder="Disease / Concern" onChange={handleChange}
          className="p-3 rounded bg-black border border-gray-700 text-white col-span-2" />

        <input name="date" type="date" required onChange={handleChange}
          className="p-3 rounded bg-black border border-gray-700 text-white" />

        <input name="time" type="time" required onChange={handleChange}
          className="p-3 rounded bg-black border border-gray-700 text-white" />

        <button
          type="submit"
          className="col-span-2 mt-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-amber-500/40 transition"
        >
          Submit Appointment Request
        </button>

      </form>
    </div>
  </div>
)}

      
    </section>
  );
}
