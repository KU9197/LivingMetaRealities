import { useState } from "react";
import Card from "../components/Card";
import PageSection from "../components/Pagesection";

export default function Data() {
  const [openInfo, setOpenInfo] = useState<number | null>(null);

  const toggleInfo = (index: number) => {
    setOpenInfo(openInfo === index ? null : index);
  };

  return (
    <div className="grid gap-6">
      <PageSection
        title=""
        subtitle=""
      >
        <Card>
          <div className="flex flex-wrap gap-4">
            <a 
              className="inline-flex items-center gap-2 rounded-full bg-[#E4EDFF] border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-[#d4dcef] transition-all duration-200 shadow-md hover:shadow-lg" 
              href="#"
              download
            >
              Download main dataset
            </a>
            <a 
              className="inline-flex items-center gap-2 rounded-full bg-[#E4EDFF] border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-[#d4dcef] transition-all duration-200 shadow-md hover:shadow-lg" 
              href="https://osf.io/nt9hv/?view_only=4f25bbfbe08e47afb1e931e2c4f3e0d7"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all data and code
            </a>
          </div>
        </Card>
      </PageSection>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Descriptive Statistics">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">Metric</th>
                  <th className="text-right py-3 px-4 font-semibold text-neutral-900">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 text-neutral-700">Number of Papers</td>
                  <td className="py-3 px-4 text-right font-medium text-neutral-900">86</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 text-neutral-700">Number of Studies</td>
                  <td className="py-3 px-4 text-right font-medium text-neutral-900">115</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 text-neutral-700">Number of Effect Sizes</td>
                  <td className="py-3 px-4 text-right font-medium text-neutral-900">299</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 text-neutral-700">Publication Year Range</td>
                  <td className="py-3 px-4 text-right font-medium text-neutral-900">2002–2025</td>
                </tr>

                <tr className="bg-neutral-50">
                  <td colSpan={2} className="py-3 px-4 text-neutral-800 font-medium">
                    Number of papers by academic field
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-2 pl-8 pr-4 text-neutral-700">Business/Management</td>
                  <td className="py-2 px-4 text-right font-medium text-neutral-900">21</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-2 pl-8 pr-4 text-neutral-700">Information Systems</td>
                  <td className="py-2 px-4 text-right font-medium text-neutral-900">27</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-2 pl-8 pr-4 text-neutral-700">Marketing</td>
                  <td className="py-2 px-4 text-right font-medium text-neutral-900">38</td>
                </tr>

                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 text-neutral-700">Number of Different Journals</td>
                  <td className="py-3 px-4 text-right font-medium text-neutral-900">52</td>
                </tr>

                <tr className="bg-neutral-50">
                  <td colSpan={2} className="py-3 px-4 text-neutral-800 font-medium">
                    Number of papers by publication type
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-2 pl-8 pr-4 text-neutral-700">Conference abstract</td>
                  <td className="py-2 px-4 text-right font-medium text-neutral-900">1</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-2 pl-8 pr-4 text-neutral-700">Dissertation</td>
                  <td className="py-2 px-4 text-right font-medium text-neutral-900">5</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-2 pl-8 pr-4 text-neutral-700">Journal paper</td>
                  <td className="py-2 px-4 text-right font-medium text-neutral-900">79</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-2 pl-8 pr-4 text-neutral-700">Working paper</td>
                  <td className="py-2 px-4 text-right font-medium text-neutral-900">1</td>
                </tr>

                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 text-neutral-700">Total Sample Size</td>
                  <td className="py-3 px-4 text-right font-medium text-neutral-900">19,883</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 text-neutral-700">Sample size range (min. – max.)</td>
                  <td className="py-3 px-4 text-right font-medium text-neutral-900">28–1,514</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 text-neutral-700">Median Sample Size</td>
                  <td className="py-3 px-4 text-right font-medium text-neutral-900">127</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 text-neutral-700">Number of Countries</td>
                  <td className="py-3 px-4 text-right font-medium text-neutral-900">21</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 text-neutral-700">Mean effect size (Cohen's d)</td>
                  <td className="py-3 px-4 text-right font-medium text-neutral-900">0.42</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 text-neutral-700">SD Effect Size</td>
                  <td className="py-3 px-4 text-right font-medium text-neutral-900">0.46</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Information on Dataset">
          <div className="space-y-3">
            {/* Question 1 */}
            <div className="border border-neutral-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleInfo(0)}
                className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors duration-200 text-left"
              >
                <h4 className="font-semibold text-sm text-neutral-900">
                  How to read the dataset?
                </h4>
                <svg
                  className={`w-4 h-4 text-neutral-600 transition-transform duration-200 flex-shrink-0 ml-3 ${
                    openInfo === 0 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openInfo === 0 && (
                <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-200">
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Each row of the dataset represents an individual effect size. The effect sizes are nested within studies which are part of an overall paper. 
                    Each paper, study, and effect size has its individual ID: IDp (paper), IDd (study), IDES (effect size)
                  </p>
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div className="border border-neutral-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleInfo(1)}
                className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors duration-200 text-left"
              >
                <h4 className="font-semibold text-sm text-neutral-900">
                  What are the main variables?
                </h4>
                <svg
                  className={`w-4 h-4 text-neutral-600 transition-transform duration-200 flex-shrink-0 ml-3 ${
                    openInfo === 1 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openInfo === 1 && (
                <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-200">
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>IDp = "Paper ID"</li>
                    <li>IDd = "Study ID"</li>
                    <li>IDES = "Effect size ID"</li>
                    <li>ESRAW = "Raw effect size (Cohen's d)"</li>
                    <li>ES_VAR = "Variance of effect size"</li>
                    <li>ES_Sample = "Sample size of effect size"</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Question 3 */}
            <div className="border border-neutral-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleInfo(2)}
                className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors duration-200 text-left"
              >
                <h4 className="font-semibold text-sm text-neutral-900">
                  What does the dataset contain?
                </h4>
                <svg
                  className={`w-4 h-4 text-neutral-600 transition-transform duration-200 flex-shrink-0 ml-3 ${
                    openInfo === 2 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openInfo === 2 && (
                <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-200">
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    The dataset contains: 1) effect sizes and their variances for the impact of XRs on consumer responses, and 2) all variables of the theoretical moderators 
                    (e.g., type of XRs, brand familiarity, etc.) and methodological controls (e.g., paper and study characteristics). 
                    For the data of the meta-SEM please visit our OSF page clicking "view all data and code" above.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
