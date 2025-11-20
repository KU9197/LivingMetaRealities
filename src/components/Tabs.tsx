import { useState } from "react";

type Tab = { id: string; label: string; content: React.ReactNode };

export default function Tabs({ tabs, defaultId }: { tabs: Tab[]; defaultId?: string }) {
  const [active, setActive] = useState<string>(defaultId ?? tabs[0]?.id);
  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-2">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-all duration-200
              ${active === t.id 
                ? "bg-neutral-900 text-white border-neutral-900 shadow-md" 
                : "bg-white border-transparent hover:bg-neutral-50 hover:border-neutral-300 text-neutral-600 hover:text-neutral-900"}`}
            aria-pressed={active === t.id}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="animate-fadeIn">{tabs.find(t => t.id === active)?.content}</div>
    </div>
  );
}
