import { ReactNode } from "react";

export function SurfaceCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur ${className}`}>{children}</div>;
}

export function SectionShell({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl scroll-mt-28 px-6 py-16 sm:px-8 ${className}`}>
      {children}
    </section>
  );
}
