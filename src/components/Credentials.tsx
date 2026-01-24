import { BadgeCheck } from "lucide-react";

export default function Credentials() {
  const memberships = [
    { title: "Pediatric Cardiac Society", year: "2014 – Present" },
    { title: "European Society of Cardio Vascular Surgeons", year: "2013 – Present" },
    { title: "European Association of Cardio-Thoracic Surgeons", year: "2008 – Present" },
    { title: "Heart Failure Society of America", year: "2007 – Present" },
    { title: "Association of Russian Cardio-Vascular Surgeons", year: "2005 – Present" },
    { title: "Society of Russian Cardiac Surgeons", year: "2005 – Present" },
    { title: "Russian Avia-Cosmic Medicine", year: "2002 – Present" },
    { title: "Vishwa Ayurveda Parishad", year: "2019 – Present" },
    { title: "Institute of Electrical and Electronics Engineers (IEEE)", year: "2021 – Present" },
    { title: "Canadian Cardiovascular Surgery", year: "2024 – Present" },
    { title: "Indian Medical Association", year: "2025 – Present" },
  ];

  return (
    <section
      id="credentials"
      className="relative pt-16 pb-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Professional Credentials
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-4 rounded-full" />

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Memberships in prestigious global medical, scientific, and professional bodies
          </p>
        </div>

        {/* Membership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memberships.map((item) => (
            <article
              key={item.title}
              className="group bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-2xl transition-all duration-300 hover:border-amber-500/60 hover:shadow-xl hover:shadow-amber-500/30"
            >
              {/* Top Accent Line */}
              <div className="h-1 w-full bg-gradient-to-r from-amber-400 to-yellow-600 rounded-t-2xl" />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-amber-400 font-semibold text-sm">
                    {item.year}
                  </span>

                  <div className="w-11 h-11 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/50">
                    <BadgeCheck size={22} className="text-black" />
                  </div>
                </div>

                <h3 className="text-white font-semibold text-lg leading-snug">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}