import { useState } from "react";
import Card from "../components/Card";
import PageSection from "../components/Pagesection";

export default function Landing() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="grid gap-6">
      <PageSection
        title=""
        subtitle=""
      >
        <Card title="Overview">
          <div className="space-y-4">
            <p className="text-neutral-700 leading-relaxed">
              This website contains interactive results and a living meta-analysis tool for the paper: 
              <strong className="text-neutral-900"> Getting Hands On(line)? A Meta-Analysis of the Effectiveness of Extended Reality Presentations in E-Commerce.</strong>
            </p>
            <p className="text-neutral-700 leading-relaxed">
              The paper's database comprises <strong>299 effect sizes</strong>, from <strong>115 studies</strong>, published between <strong>2002 and 2025</strong> for the effect of XRs (AR/VR/3D) on consumer responses. 
              Feel free to explore our interactive results, access the data and code, or contribute new data to our meta-analysis!
            </p>
          </div>
        </Card>
      </PageSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="Key Research Questions & Findings">
            <div className="space-y-3">
              {/* Question 1 */}
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleQuestion(0)}
                  className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors duration-200 text-left"
                >
                  <h3 className="font-semibold text-base text-neutral-900">
                    What is the overall impact of XRs on consumer responses?
                  </h3>
                  <svg
                    className={`w-5 h-5 text-neutral-600 transition-transform duration-200 flex-shrink-0 ml-3 ${
                      openQuestion === 0 ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestion === 0 && (
                  <div className="px-5 py-4 bg-neutral-50 border-t border-neutral-200">
                    <div className="bg-white rounded-lg p-6 border border-neutral-200">
                      <div className="flex items-center justify-center space-x-4 text-sm text-neutral-600 mb-3">
                        <span>-.50</span>
                        <div className="flex-1 h-2 bg-neutral-200 rounded-full relative">
                          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-neutral-400"></div>
                          <div className="absolute top-0 bottom-0 w-1 bg-green-600" style={{ left: '70%' }}></div>
                        </div>
                        <span>0</span>
                        <span>+.50</span>
                        <span>+1.0</span>
                      </div>
                      <p className="text-center font-bold text-neutral-900 mb-2">d = .41***</p>
                      <p className="text-neutral-700 text-sm">
                        There is a <strong>61.5% probability</strong> that a randomly selected consumer would respond more favorably to a product presented via XRs than without XRs.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleQuestion(1)}
                  className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors duration-200 text-left"
                >
                  <h3 className="font-semibold text-base text-neutral-900">
                    What drives the effect of XRs on consumer responses?
                  </h3>
                  <svg
                    className={`w-5 h-5 text-neutral-600 transition-transform duration-200 flex-shrink-0 ml-3 ${
                      openQuestion === 1 ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestion === 1 && (
                  <div className="px-5 py-4 bg-neutral-50 border-t border-neutral-200">
                    <div className="text-neutral-700 space-y-2">
                      <p>XRs increase mental simulation of the product and allow for information assessment.</p>
                      <p><strong>Mental simulation is a stronger driver than information assessment.</strong></p>
                    </div>
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleQuestion(2)}
                  className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors duration-200 text-left"
                >
                  <h3 className="font-semibold text-base text-neutral-900">
                    How context-dependent is the impact of XRs on consumer responses?
                  </h3>
                  <svg
                    className={`w-5 h-5 text-neutral-600 transition-transform duration-200 flex-shrink-0 ml-3 ${
                      openQuestion === 2 ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestion === 2 && (
                  <div className="px-5 py-4 bg-neutral-50 border-t border-neutral-200">
                    <div className="text-neutral-700 space-y-2">
                      <p><span className="text-green-600 font-semibold">Factors strengthening effect:</span> including overlay elements, targeting experiential shoppers</p>
                      <p><span className="text-red-600 font-semibold">Factors weakening effect:</span> familiar brands, targeting older consumers</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card title="Engage With Our Research">
            <div className="space-y-4">
              <div className="space-y-3">
                <a
                  className="group flex items-center gap-3 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg text-neutral-400 group-hover:text-neutral-600 transition-colors">➔</span>
                  Read the paper
                </a>
                <a
                  className="group flex items-center gap-3 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  href="https://osf.io/nt9hv/?view_only=4f25bbfbe08e47afb1e931e2c4f3e0d7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg text-neutral-400 group-hover:text-neutral-600 transition-colors">➔</span>
                  Access data and code
                </a>
                <a
                  className="group flex items-center gap-3 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  href="/interactive-results"
                >
                  <span className="text-lg text-neutral-400 group-hover:text-neutral-600 transition-colors">➔</span>
                  View interactive results
                </a>
                <a
                  className="group flex items-center gap-3 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  href="/living-meta-analysis"
                >
                  <span className="text-lg text-neutral-400 group-hover:text-neutral-600 transition-colors">➔</span>
                  Contribute new data
                </a>
              </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>If you use any data or code, please cite:</strong><br />
              Getting Hands On(line)? A Meta-Analysis of the Effectiveness of Extended Reality Presentations in E-Commerce.
            </p>
          </div>
        </div>
      </Card>
        </div>
      </div>
    </div>
  );
}
