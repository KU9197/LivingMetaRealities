import Card from "../components/Card";
import PageSection from "../components/Pagesection";

export default function LivingMeta() {
  return (
    <div className="grid gap-6">
      <PageSection
        title=""
        subtitle=""
      >
        <Card>
          <div className="space-y-4 text-neutral-700">
            <p className="leading-relaxed">
              We developed this living meta-analysis tool to keep our meta-analysis constantly updated. 
              We would appreciate your contribution if you have relevant effect sizes that meet our inclusion criteria. 
              Thank you!
            </p>
            <p className="text-sm italic leading-relaxed">
              Inspired by: Cadario, Romain and Pierre Chandon (2020), "Which Healthy Eating Nudges Work Best? A Meta-Analysis of Field Experiments," Marketing Science, 39 (3), 465–86.
            </p>
          </div>
        </Card>

        <Card title="Google forms or Qualtrics Survey">
          <div className="space-y-4">
            <div className="bg-neutral-50 rounded-lg border-2 border-neutral-200 p-8 min-h-[500px] flex items-center justify-center">
              <div className="text-center space-y-4 max-w-lg">
                <div className="text-6xl">📝</div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Survey Form Placeholder
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Embed your Google Forms or Qualtrics survey here to collect new study data from contributors.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-neutral-300 text-left">
                  <p className="text-xs text-neutral-700 font-mono">
                    {`<iframe\n  src="YOUR_SURVEY_URL"\n  width="100%"\n  height="500px"\n  frameBorder="0"\n/>`}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Uncomment and add your survey URL when ready:
            <iframe
              src="YOUR_GOOGLE_FORMS_OR_QUALTRICS_URL_HERE"
              width="100%"
              height="800px"
              frameBorder="0"
              title="Living Meta-Analysis Submission Form"
              className="rounded-lg"
            >
              Loading…
            </iframe>
            */}

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>ℹ️ Before submitting:</strong> Please ensure your study meets our inclusion criteria. 
                Submissions are reviewed before being integrated into the main dataset.
              </p>
            </div>
          </div>
        </Card>
      </PageSection>
    </div>
  );
}
