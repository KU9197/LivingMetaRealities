import Card from "../components/Card";
import PageSection from "../components/Pagesection";
import { ShinyIframeSlot } from "../components/ShinyIframeProvider";

export default function InteractiveResults() {
  return (
    <div className="grid gap-6">
      <PageSection
        title=""
        subtitle=""
      >
        <Card title="Interactive Results">
          <div className="space-y-4">
            <p className="text-neutral-700 leading-relaxed">
              On this page you can explore our results in an interactive way, i.e., the main effects, our main moderator analyses, all subgroup analyses, interaction effects, and robustness checks. For the full results, please refer to our OSF page and the paper.
            </p>
          </div>
        </Card>

        <Card>
          <div className="rounded-xl border-2 border-neutral-200 bg-white overflow-hidden">
            <ShinyIframeSlot className="w-full min-h-[800px]" />
          </div>
        </Card>
      </PageSection>
    </div>
  );
}

