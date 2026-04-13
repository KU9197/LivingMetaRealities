import { useState } from "react";
import Card from "../components/Card";
import PageSection from "../components/Pagesection";

export default function Landing() {
  const [openQuestion, setOpenQuestion] = useState<Set<number>>(new Set());

  const toggleQuestion = (index: number) => {
    setOpenQuestion(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Overview "effect size" mini-scale (matches paper summary styling)
  const overallEffectSize = 0.41;
  const scaleMin = -0.5;
  const scaleMax = 1.0;
  const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
  const markerPercent = ((clamp(overallEffectSize, scaleMin, scaleMax) - scaleMin) / (scaleMax - scaleMin)) * 100;

  return (
    <div className="grid gap-6">
      <PageSection
        title=""
        subtitle=""
      >
        <Card title="Overview">
          <div className="space-y-4">
            <p className="text-neutral-700 leading-relaxed">
              This website contains interactive results and a living meta-analysis tool for the paper: Uhlendorf-Leo, K., Uhrich, S., & Völckner, F. (2026). Getting Hands On(line)? A Meta-Analysis of the Effectiveness of Extended Realities in Online Retailing. <em>International Journal of Research in Marketing</em>, Forthcoming.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              The paper's database comprises <strong>298 effect sizes</strong>, from <strong>111 studies</strong>, published between <strong>2002 and 2025</strong> for the effect of XRs (AR/VR/3D) on consumer responses. Feel free to explore our interactive results, access the data and code, or contribute new data to our meta-analysis!
            </p>
          </div>
        </Card>
      </PageSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="lg:col-span-1 flex">
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
                      openQuestion.has(0) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestion.has(0) && (
                  <div className="px-5 py-4 bg-neutral-50 border-t border-neutral-200">
                    <div className="bg-white rounded-lg p-6 border border-neutral-200">
                      <div className="mb-4">
                        <div className="flex items-center justify-center mb-3">
                          <div className="flex-1 relative">
                            {/* axis line */}
                            <div className="h-1 bg-neutral-700/70 rounded-full" />

                            {/* ticks */}
                            {[
                              { label: "-.50", left: 0 },
                              { label: "0", left: 33.3333 },
                              { label: "+.50", left: 66.6667 },
                              { label: "+1.0", left: 100 },
                            ].map((t) => (
                              <div
                                key={t.label}
                                className="absolute -top-2 w-px h-6 bg-neutral-700/70"
                                style={{ left: `${t.left}%`, transform: "translateX(-50%)" }}
                              />
                            ))}

                            {/* marker */}
                            <div
                              className="absolute -top-2 w-px h-6 bg-green-700"
                              style={{ left: `${markerPercent}%`, transform: "translateX(-50%)" }}
                            />
                            <div
                              className="absolute top-full mt-1 flex flex-col items-center"
                              style={{ left: `${markerPercent}%`, transform: "translateX(-50%)" }}
                            >
                              {/* up-caret */}
                              <svg className="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 15l-7-7-7 7" />
                              </svg>
                              <div className="mt-2 text-center font-bold text-neutral-900 text-sm leading-none">
                                d = .41***
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs text-neutral-600">
                          <span>-.50</span>
                          <span>0</span>
                          <span>+.50</span>
                          <span>+1.0</span>
                        </div>
                      </div>
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
                      openQuestion.has(1) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestion.has(1) && (
                  <div className="px-5 py-4 bg-neutral-50 border-t border-neutral-200">
                    <div className="text-neutral-700 space-y-2">
                      <p>XRs <strong>increase mental simulation</strong> and <strong>allow for information assessment</strong>.</p>
                      <p>Mental simulation is a stronger driver than information assessment.</p>
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
                      openQuestion.has(2) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestion.has(2) && (
                  <div className="px-5 py-4 bg-neutral-50 border-t border-neutral-200">
                    <div className="text-neutral-700 space-y-2">
                    <p><span className="text-green-600 font-semibold">Factors strengthening effect:</span> including overlay elements, targeting experiential shoppers</p>

                      <p><span className="text-red-600 font-semibold">Factors weakening effect:</span> VR on PC, familiar brands</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1 flex">
  <Card title="Engage With Our Research">
    <div className="space-y-4">
      <div className="space-y-3">
        <a
          href="https://www.sciencedirect.com/science/article/pii/S0167811626000297"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
          aria-label="Read the paper"
        >
          <span className="text-lg text-neutral-400 group-hover:text-neutral-600 transition-colors">➔</span>
          Read the paper
        </a>
                <a
                  className="group flex items-center gap-3 text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  href="https://osf.io/nt9hv/?view_only=4f25bbfbe08e47afb1e931e2c4f3e0d7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg text-neutral-400 group-hover:text-neutral-600 transition-colors">➔</span>
                  Access data and code
                </a>
                <a
                  className="group flex items-center gap-3 text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  href="/interactive-results"
                >
                  <span className="text-lg text-neutral-400 group-hover:text-neutral-600 transition-colors">➔</span>
                  View interactive results
                </a>
                <a
                  className="group flex items-center gap-3 text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  href="/living-meta-analysis"
                >
                  <span className="text-lg text-neutral-400 group-hover:text-neutral-600 transition-colors">➔</span>
                  Contribute new data
                </a>
              </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>If you use any data or code, please cite:</strong><br />
              Uhlendorf-Leo, K., Uhrich, S., & Völckner, F. (2026). Getting Hands On(line)? A Meta-Analysis of the Effectiveness of Extended Realities in Online Retailing. <em>International Journal of Research in Marketing</em>, Forthcoming.
            </p>
          </div>
        </div>
      </Card>
        </div>
      </div>
    </div>
  );
}
