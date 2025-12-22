

type Patent = {
  id: number;
  appNo: string;
  title: string;
};

export default function Patents(): JSX.Element {
  const patentList: Patent[] = [
    { id: 1, appNo: "TEMP/E-1/36762/2018-CHE", title: "A Novel Immunomodulatory Compound from Punarnava" },
    { id: 2, appNo: "TEMP/E-1/36773/2018-CHE", title: "A Novel Immunomodulatory Compound from Piper Nigrum" },
    { id: 3, appNo: "TEMP/E-1/36766/2018-CHE", title: "A Novel Immunomodulatory Compound from Karavella" },
    { id: 4, appNo: "TEMP/E-1/36763/2018-CHE", title: "A Novel Immunomodulatory Compound from Guduchi" },
    { id: 5, appNo: "TEMP/E-1/36867/2018-CHE", title: "A Novel Immunomodulatory Compound from Inula Racemosa" },
    { id: 6, appNo: "TEMP/E-1/36767/2018-CHE", title: "A Novel Immunomodulatory Compound from Sonti" },
    { id: 7, appNo: "TEMP/E-1/36771/2018-CHE", title: "A Novel Immunomodulatory Compound from Vacha" },
    { id: 8, appNo: "TEMP/E-1/36759/2018-CHE", title: "A Novel Immunomodulatory Compound from Udumbara" },
    { id: 9, appNo: "TEMP/E-1/36768/2018-CHE", title: "A Novel Immunomodulatory Compound from Haridra" },
    { id: 10, appNo: "TEMP/E-1/36758/2018-CHE", title: "A Novel Immunomodulatory Compound from Shobanjan" },
    { id: 11, appNo: "TEMP/E-1/36765/2018-CHE", title: "A Novel Immunomodulatory Compound from Haritaki" },
    { id: 12, appNo: "TEMP/E-1/36756/2018-CHE", title: "A Novel Immunomodulatory Compound from Mundi" },
    { id: 13, appNo: "TEMP/E-1/36502/2018-CHE", title: "Polyherbal Formulation for Melanomas, Adenomas & Liver Cancers" },
    { id: 14, appNo: "TEMP/E-1/36354/2018-CHE", title: "Digital Doctor Assistant using Organ Action Potentials" },
    { id: 15, appNo: "TEMP/E-1/36368/2018-CHE", title: "Method for Diagnosing Patients using Registered Action Potentials" },
    { id: 16, appNo: "TEMP/E-1/36996/2018-CHE", title: "Polyherbal Formulation for Immunomodulatory Action" },
    { id: 17, appNo: "TEMP/E-1/36539/2018-CHE", title: "Compound for Restoring Gut Microflora–Immune Symbiosis" },
    { id: 18, appNo: "TEMP/E-1/36772/2018-CHE", title: "Immunomodulatory Compound from Talispatra" },
    { id: 19, appNo: "TEMP/E-1/36010/2018-CHE", title: "Compound from Corilagen in Cancer Treatment" },
    { id: 20, appNo: "TEMP/E-1/36774/2018-CHE", title: "Method to Control After Effects of Multiple Sclerosis" },
    { id: 21, appNo: "TEMP/E-1/36367/2018-CHE", title: "Organ Action Potential Device with Blood Biochemistry Detection" },
    { id: 22, appNo: "TEMP/E-1/38309/2018-CHE", title: "Herbal Brain Regeneration in Hypoxic Encephalopathy" },
    { id: 23, appNo: "TEMP/E-1/36031/2018-CHE", title: "Polyherbal Mineral Compound APD-234 for GIT Regulation" },
    { id: 24, appNo: "TEMP/E-1/36485/2018-CHE", title: "Immunomodulatory Compound from Pippali" },
    { id: 25, appNo: "TEMP/E-1/36761/2018-CHE", title: "Immunomodulatory Compound from NagarMustak" },
    { id: 26, appNo: "TEMP/E-1/36008/2018-CHE", title: "Novel Use of Plant Hormone 24-Epibrassinolide" },
    { id: 27, appNo: "TEMP/E-1/36864/2018-CHE", title: "Anti-Allergic Extract of Clerodendrum Serratum" },
    { id: 28, appNo: "TEMP/E-1/36863/2018-CHE", title: "6-Hydroxy Luteolin Anti-Allergic Formulation" },
    { id: 29, appNo: "TEMP/E-1/36011/2018-CHE", title: "Ellagic Acid Derived Compound in Cancer Treatment" },
    { id: 30, appNo: "—", title: "Nano Gold Particle NGP-89" },
    { id: 31, appNo: "TEMP/E-1/36038/2018-CHE", title: "Polyherbal Epigenetic Regulation of Cancers" },
    { id: 32, appNo: "TEMP/E-1/36512/2018-CHE", title: "Polyherbal Treatment for Adenomas & Endocrine Cancers" },
    { id: 33, appNo: "TEMP/E-1/36119/2018-CHE", title: "Polyherbal Treatment for Bleeding Hemorrhoids" },
    { id: 34, appNo: "TEMP/E-1/36877/2018-CHE", title: "Enhanced Antitumor Processing of Vinca Rosea" },
    { id: 35, appNo: "TEMP/E-1/36729/2018-CHE", title: "Polyherbal Treatment for Idiopathic Thrombocytopenic Purpura" },
    { id: 36, appNo: "TEMP/E-1/36006/2018-CHE", title: "Polyherbal Compound MGN for Migraines" },
    { id: 37, appNo: "TEMP/E-1/36869/2018-CHE", title: "Augmented Antitumor Properties of Jasminum Augustifolium" },
    { id: 38, appNo: "—", title: "Manufacturing Method of Phthalazine Derivative PD Arjunolic Tannin-99" },
    { id: 39, appNo: "TEMP/E-1/36769/2018-CHE", title: "Immunomodulatory Compound from Arkapatra" },
    { id: 40, appNo: "—", title: "PD Arjunolic Tannin-99 — Novel PARP Inhibitor" },
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
