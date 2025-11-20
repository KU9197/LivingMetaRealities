import Card from "../components/Card";
import PageSection from "../components/Pagesection";

export default function InteractiveResults() {
  return (
    <div className="grid gap-6">
      <PageSection
        title=""
        subtitle=""
      >
        <Card>
          <div className="space-y-4">
            <p className="text-neutral-700 leading-relaxed">
              On this page you can explore our results in an interactive way, i.e., the main effects, our main moderator analyses, all subgroup analyses, time effect analyses, and robustness checks. 
              For the full results, please refer to our OSF page and the paper.
            </p>
          </div>
        </Card>

        <Card title="Interactive Shiny App">
          <div className="rounded-xl border-2 border-neutral-200 bg-white overflow-hidden">
            <iframe
              src="https://arsearchwebsites.shinyapps.io/arsearchwebsite/"
              width="100%"
              height="800px"
              frameBorder="0"
              title="Interactive Results - Meta-Analysis on Extended Realities"
              className="w-full"
              style={{ minHeight: '800px' }}
            />
          </div>
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>💡 Tip:</strong> The interactive app above allows you to explore main effects, full meta-regressions, subgroup analyses, time effect analyses, and robustness checks. 
              Use the dropdown menus within the app to navigate between different sections.
            </p>
          </div>
        </Card>
      </PageSection>
    </div>
  );
}

