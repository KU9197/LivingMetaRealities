import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ title: string; subtitle?: string }>;

export default function PageSection({ title, subtitle, children }: Props) {
  return (
    <div className="grid gap-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">{title}</h1>
        {subtitle && <p className="text-lg text-neutral-600 max-w-3xl">{subtitle}</p>}
      </div>
      <div className="grid gap-5 mt-2">{children}</div>
    </div>
  );
}
