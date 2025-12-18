import { useState } from "react";

export default function Gallery() {
  const galleryItems = [
    { title: 'President of India Dr. APJ Abdul Kalam 2013 ', img: '/apj.png', category: 'Dr. Lead India Bharat Ratna' },
    { title: 'With CM.Chandrababu', img: '/cm.chandrababu.png', category: 'Conferences' },
    { title: 'The fastest growing Indian Company Excellence Award ', img: '/dubai.png', category: 'Award' },
    { title: 'Docture-Poly™ Launch at Moscow', img: '/moscowdp.png', category: 'Innovation' },
    { title: 'Global Indian of the Year Award for 2023 ', img: '/awardsdr.png', category: 'Awards' },
    { title: '‘Peter Drucker Excellence Award’', img: '/atmanirbar.png', category: 'Award' },
    { title: 'Dr Polisetty Receiving Pride of India 2023 Award ', img: '/goa_hc.png', category: 'Global Events' },
    { title: 'Cremia Governer and Jan Geilis ', img: '/Cremia_gov.png', category: 'Canada' },
    { title: 'Team with Ms. Lyubov Dukhanina', img: '/teamLD.png', category: 'Global Events' },
    { title: 'PRISM honorable Deputy speaker of Russian Parliament', img: '/spe_R.png', category: 'PRISM' },
    { title: 'Dr Mandeep Bhandari-Joint Secretary of Ministry of Health (Central)', img: '/PG.png', category: 'Global Events' },
    { title: 'Experience of Cardiac Surgeon with Ancient Meedical Wisdom ', img: '/news1.png', category: 'Innovation' },
    { title: 'Ayurvedic Drug for Heart Diseases', img: '/news2.png', category: 'Heart care' },
    { title: 'About Ayurveda', img: '/news3.png', category: 'Ayurveda' },
    { title: 'Docture Poly News and Ayurveda', img: '/news4.png', category: 'DocturePoly' },
    { title: 'Docture-Poly News', img: '/news5.png', category: 'DocturePoly' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3; 
  const cardWidth = 280; // smaller width
 {/* const cardHeight = 220; // smaller height*/}
  const gap = 24;

  const maxIndex = galleryItems.length - visibleCount;

  const goLeft = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const goRight = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section
      id="gallery"
      className="relative py-32 bg-gradient-to-b from-black via-blue-950 to-black"
      style={{ overflow: "visible" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Visual Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Moments that shaped the future of healthcare innovation
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative flex justify-center items-center">

         {/* LEFT BUTTON */}
<button
  onClick={goLeft}
  disabled={currentIndex === 0}
  className={`absolute left-0 z-30 w-10 h-10 flex items-center justify-center rounded-full
    ${currentIndex === 0 ? "bg-gray-600 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-600 cursor-pointer"} text-black transition`}
  aria-label="Scroll Left"
  style={{ top: `calc(50% - 30px)` }} // moved 20px down
>
  ◀
</button>

          {/* CARDS VIEWPORT */}
          <div
            className="overflow-hidden relative"
            style={{ width: (cardWidth * visibleCount) + (gap * (visibleCount - 1)) }}
          >
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * (cardWidth + gap)}px)` }}
            >
              {galleryItems.map((item, index) => (
                <div key={index} className="flex-none w-[280px]">
                  <div className="relative rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#fbbf24]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className={`w-full h-[220px] object-cover rounded-2xl`}
                    />
                    <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {item.category}
                    </div>
                    <div className="p-2 bg-black/60 rounded-b-2xl">
                      <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* RIGHT BUTTON */}
<button
  onClick={goRight}
  disabled={currentIndex === maxIndex}
  className={`absolute right-0 z-30 w-10 h-10 flex items-center justify-center rounded-full
    ${currentIndex === maxIndex ? "bg-gray-600 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-600 cursor-pointer"} text-black transition`}
  aria-label="Scroll Right"
  style={{ top: `calc(50% - 30px)` }} // moved 20px down
>
  ▶
</button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? "bg-amber-500 scale-125" : "bg-gray-500"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
