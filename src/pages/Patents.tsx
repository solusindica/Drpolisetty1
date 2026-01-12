

type Patent = {
  id: number;
  appNo: string;
  title: string;
};

export default function Patents(): JSX.Element {
  const patentList: Patent[] = [
    { id: 1, appNo: "TEMP/E-1/36762/2018-CHE", title: "A proprietary bioactive compound derived from Punarnava, designed to modulate immune responses in conditions characterized by immune dysregulation, inflammation, and chronic disease states." },
    { id: 2, appNo: "TEMP/E-1/36773/2018-CHE", title: "This invention describes a standardized immunomodulatory extract from Piper nigrum, developed to influence immune balance and support systemic inflammatory regulation." },
    { id: 3, appNo: "TEMP/E-1/36766/2018-CHE", title: "A novel compound isolated from Karavella with potential applications in immune modulation, metabolic regulation, and inflammatory control." },
    { id: 4, appNo: "TEMP/E-1/36763/2018-CHE", title: "A proprietary Guduchi-derived compound developed for restoring immune equilibrium in chronic inflammatory and immune-compromised conditions." },
    { id: 5, appNo: "TEMP/E-1/36867/2018-CHE", title: "An immunologically active extract from Inula racemosa, formulated to support immune regulation and resilience in chronic disease states." },
    { id: 6, appNo: "TEMP/E-1/36767/2018-CHE", title: "This patent covers a bioactive compound from Sonti, aimed at modulating immune responses and reducing pathological immune overactivity." },
    { id: 7, appNo: "TEMP/E-1/36771/2018-CHE", title: "A standardized immunomodulatory formulation derived from Vacha, developed to influence neuro-immune signaling and systemic immune balance." },
    { id: 8, appNo: "TEMP/E-1/36759/2018-CHE", title: "A novel compound sourced from Udumbara with applications in immune modulation and regenerative support." },
    { id: 9, appNo: "TEMP/E-1/36768/2018-CHE", title: "This invention describes a Haridra-based compound optimized for immunomodulatory activity and inflammatory regulation." },
    { id: 10, appNo: "TEMP/E-1/36758/2018-CHE", title: "A bioactive extract from Shobanjan designed to support immune homeostasis and systemic resilience." },
    { id: 11, appNo: "TEMP/E-1/36765/2018-CHE", title: "A proprietary Haritaki-derived compound developed to influence immune regulation and chronic inflammatory pathways." },
    { id: 12, appNo: "TEMP/E-1/36756/2018-CHE", title: "An immunomodulatory formulation derived from Mundi, focused on restoring immune balance in complex disease conditions." },
    { id: 13, appNo: "TEMP/E-1/36502/2018-CHE", title: "A multi-component polyherbal formulation developed to address malignant and pre-malignant conditions through systemic immune and metabolic regulation." },
    { id: 14, appNo: "TEMP/E-1/36354/2018-CHE", title: "A digital clinical assistant platform that utilizes organ-specific electrical activity patterns to support diagnostic and decision-making processes." },
    { id: 15, appNo: "TEMP/E-1/36368/2018-CHE", title: "A novel diagnostic methodology based on capturing and interpreting registered action potentials to assess organ function and disease states." },
    { id: 16, appNo: "TEMP/E-1/36996/2018-CHE", title: "A broad-spectrum polyherbal composition designed to restore immune balance across inflammatory, autoimmune, and chronic disease conditions." },
    { id: 17, appNo: "TEMP/E-1/36539/2018-CHE", title: "A proprietary compound developed to re-establish healthy interactions between gut microbiota and the immune system." },
    { id: 18, appNo: "TEMP/E-1/36772/2018-CHE", title: "A novel Talispatra-derived compound with applications in immune regulation and inflammatory control." },
    { id: 19, appNo: "TEMP/E-1/36010/2018-CHE", title: "An invention describing a Corilagen-derived compound intended for supportive intervention in oncological conditions." },
    { id: 20, appNo: "TEMP/E-1/36774/2018-CHE", title: "A therapeutic methodology designed to manage and mitigate post-progression effects associated with multiple sclerosis." },
    { id: 21, appNo: "TEMP/E-1/36367/2018-CHE", title: "A hybrid diagnostic device integrating bioelectrical organ signals with biochemical parameters for enhanced clinical assessment." },
    { id: 22, appNo: "TEMP/E-1/38309/2018-CHE", title: "A regenerative therapeutic approach aimed at supporting neural recovery following hypoxic brain injury." },
    { id: 23, appNo: "TEMP/E-1/36031/2018-CHE", title: "A proprietary polyherbal-mineral formulation designed to regulate gastrointestinal function and systemic metabolic balance." },
    { id: 24, appNo: "TEMP/E-1/36485/2018-CHE", title: "A standardized Pippali-derived compound developed for immune modulation and systemic inflammatory regulation." },
    { id: 25, appNo: "TEMP/E-1/36761/2018-CHE", title: "A novel NagarMustak-based formulation aimed at restoring immune homeostasis." },
    { id: 26, appNo: "TEMP/E-1/36008/2018-CHE", title: "A novel therapeutic application of the plant hormone 24-Epibrassinolide in human health and disease modulation." },
    { id: 27, appNo: "TEMP/E-1/36864/2018-CHE", title: "A proprietary extract developed for the management of allergic and hypersensitivity responses." },
    { id: 28, appNo: "TEMP/E-1/36863/2018-CHE", title: "A formulation based on 6-Hydroxy Luteolin designed to address allergic and immune-mediated conditions." },
    { id: 29, appNo: "TEMP/E-1/36011/2018-CHE", title: "An Ellagic acid-derived compound developed for adjunctive cancer therapy and immune-oncology applications." },
    { id: 30, appNo: "—", title: "A novel nano-engineered gold particle designed for biomedical and therapeutic applications." },
    { id: 31, appNo: "TEMP/E-1/36038/2018-CHE", title: "A multi-component formulation aimed at influencing epigenetic regulation in oncological conditions." },
    { id: 32, appNo: "TEMP/E-1/36512/2018-CHE", title: "A polyherbal therapeutic approach targeting endocrine-related tumors and adenomatous growths." },
    { id: 33, appNo: "TEMP/E-1/36119/2018-CHE", title: "A proprietary formulation designed to manage bleeding hemorrhoids through tissue and vascular regulation." },
    { id: 34, appNo: "TEMP/E-1/36877/2018-CHE", title: "A novel processing methodology enhancing the antitumor potential of Vinca rosea-derived compounds." },
    { id: 35, appNo: "TEMP/E-1/36729/2018-CHE", title: "A therapeutic formulation developed to support platelet regulation in idiopathic thrombocytopenic purpura." },
    { id: 36, appNo: "TEMP/E-1/36006/2018-CHE", title: "A proprietary polyherbal compound designed for migraine regulation and neurovascular stability." },
    { id: 37, appNo: "TEMP/E-1/36869/2018-CHE", title: "An enhanced formulation of Jasminum augustifolium aimed at improving antitumor activity." },
    { id: 38, appNo: "—", title: "A novel manufacturing and processing methodology for producing a standardized phthalazine-based derivative." },
    { id: 39, appNo: "TEMP/E-1/36769/2018-CHE", title: "A proprietary Arkapatra-derived compound developed for immune system modulation." },
    { id: 40, appNo: "—", title: "A novel compound identified as a PARP-inhibitory agent with potential applications in oncology and DNA-repair–related disorders." },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Patent Portfolio
          </h2>
          <p className="text-gray-400 mt-4 italic">
            40 Filed Patents • 16+ Under Advanced Examination
          </p>
        </div>
        {/* Additional Granted & Filed Patents */}
<div className="mt-16 max-w-4xl mx-auto">
  <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-3xl p-10 hover:border-amber-500/50 transition-all duration-300">
    
    <h3 className="font-serif text-3xl font-bold text-white mb-8 text-center">
      Selected Granted & Early Patents
    </h3>

    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">

      {/* Patent 1 */}
      <div className="border-l-4 border-amber-400 pl-6">
        <p>
          <span className="text-amber-400 font-semibold">
            Patent #334/MAS/2000
          </span>{" "}
          — <span className="italic">Carcino-cure</span>
        </p>
        <p className="text-sm text-gray-400 mt-1">
          Published on June 25, 2000 · Assigned to Dr. Ravishankar Polisetty and
          Dr. Nori G. Pradeep
        </p>
      </div>

      {/* Patent 2 */}
      <div className="border-l-4 border-blue-400 pl-6">
        <p>
          <span className="text-blue-400 font-semibold">
            Patent Filed #6486/CHE/2015
          </span>{" "}
          (12 Dec 2015)
        </p>
        <p className="text-sm text-gray-400 mt-1">
          Herbal formulation for regenerating cardiomyocytes by reducing the
          after-effects of myocardial infarction
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Inventor: Dr. Ravishankar Polisetty
        </p>
      </div>

    </div>
  </div>
</div>
<br></br>

        {/* Patent List */}
        <div className="grid md:grid-cols-2 gap-6">
          {patentList.map((patent) => (
            <div
              key={patent.id}
              className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 hover:border-amber-500/60 transition"
            >
              <div className="text-amber-400 font-bold text-lg">
                {patent.id.toString().padStart(2, "0")}
              </div>
              <div>
                <p className="text-xs text-gray-400">{patent.appNo}</p>
                <p className="text-white font-medium leading-snug">
                  {patent.title}
                </p>
              </div>
            </div>
          ))}
        </div>
<br></br>
{/* Footer Quote */}
<div className="bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-purple-500/10 border border-amber-500/30 rounded-3xl p-10 text-center">
  <p className="font-serif text-2xl text-white italic leading-relaxed mb-4">
    “Filed over{' '}
    <span className="text-amber-400 font-semibold">40 patents</span>, with{' '}
    <span className="text-amber-400 font-semibold">
      16+ additional applications
    </span>{' '}
    under advanced examination — spanning immunology, oncology,
    regenerative medicine, digital diagnostics, and systems biology.”
  </p>
  <p className="text-amber-400 text-xl font-semibold">
    — Dr. Ravishankar Polisetty
  </p>
</div>

      </div>
    </section>
  );
}
