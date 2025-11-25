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
            <div className="bg-neutral-50 rounded-lg border-2 border-neutral-200 p-4 md:p-6">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfoJFMODryA50v43CWvS_XEglyG2KeUA6TeViJ1lv1cnWKGyw/viewform?embedded=true"
                width="100%"
                height="645"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Living Meta Realities Submission Form"
                className="w-full rounded-lg bg-white"
              >
                Loading…
              </iframe>
            </div>

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
