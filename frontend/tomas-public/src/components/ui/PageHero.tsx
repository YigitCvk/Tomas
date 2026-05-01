import { DottedPattern, BlobShape } from "@/components/ui/Decorations";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-navy-900 py-20 lg:py-24">
      <DottedPattern className="absolute inset-0 text-white opacity-[0.04]" />
      <BlobShape color="amber" className="absolute -top-16 -right-16 w-64 h-64 opacity-15" />
      <BlobShape color="sky" className="absolute -bottom-12 -left-12 w-52 h-52 opacity-10" />
      <div className="container relative z-10 text-center">
        {eyebrow && (
          <p className="text-gold-400 text-[11px] font-semibold uppercase tracking-[0.22em] mb-4">
            {eyebrow}
          </p>
        )}
        <h1
          className="font-jakarta font-bold text-white mb-4 leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-300 text-lg max-w-lg mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
