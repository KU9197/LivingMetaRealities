import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{ title?: ReactNode; actions?: ReactNode }>;

export default function Card({ title, actions, children }: Props) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      {(title || actions) && (
        <header className="mb-4 flex items-center justify-between">
          {title && <h3 className="font-semibold text-neutral-900 text-lg">{title}</h3>}
          {actions}
        </header>
      )}
      <div>{children}</div>
    </section>
  );
}
