import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-gold-400 to-gold-600 text-white shadow-md hover:from-gold-500 hover:to-gold-700 hover:shadow-lg active:scale-[0.98]",
        secondary:
          "border-2 border-white text-white hover:bg-white hover:text-slate-900 active:scale-[0.98]",
        navy:
          "bg-navy-900 text-white hover:bg-navy-800 shadow-sm hover:shadow-md active:scale-[0.98]",
        outline:
          "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white active:scale-[0.98]",
        ghost:
          "text-slate-700 hover:text-gold-600 underline-offset-4 hover:underline",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
        xl: "px-10 py-5 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  }
);

type AnchorProps = VariantProps<typeof buttonVariants> & { href: string; className?: string; children: React.ReactNode } & Omit<ComponentProps<"a">, "href" | "className">;
type ButtonProps = VariantProps<typeof buttonVariants> & { href?: undefined; className?: string; children: React.ReactNode } & Omit<ComponentProps<"button">, "className">;

export function Button({ variant, size, href, className, children, ...props }: AnchorProps | ButtonProps) {
  const cls = buttonVariants({ variant, size, className });
  if (href !== undefined) {
    return (
      <Link href={href} className={cls} {...(props as Omit<ComponentProps<"a">, "href" | "className">)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...(props as Omit<ComponentProps<"button">, "className">)}>
      {children}
    </button>
  );
}
