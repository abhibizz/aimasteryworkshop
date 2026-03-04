/** Inline SVGs for above-the-fold icons — avoids pulling lucide-react into the critical path */
import { forwardRef, type SVGProps } from "react";

const svgBase: SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

type IconProps = { size?: number; className?: string };

export const MapPinIcon = forwardRef<SVGSVGElement, IconProps>(({ size = 24, className }, ref) => (
  <svg {...svgBase} ref={ref} width={size} height={size} className={className}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
));

export const GraduationCapIcon = forwardRef<SVGSVGElement, IconProps>(({ size = 24, className }, ref) => (
  <svg {...svgBase} ref={ref} width={size} height={size} className={className}>
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </svg>
));

export const AwardIcon = forwardRef<SVGSVGElement, IconProps>(({ size = 24, className }, ref) => (
  <svg {...svgBase} ref={ref} width={size} height={size} className={className}>
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
    <circle cx="12" cy="8" r="6" />
  </svg>
));

export const UsersIcon = forwardRef<SVGSVGElement, IconProps>(({ size = 24, className }, ref) => (
  <svg {...svgBase} ref={ref} width={size} height={size} className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
));

export const ArrowRightIcon = forwardRef<SVGSVGElement, IconProps>(({ size = 24, className }, ref) => (
  <svg {...svgBase} ref={ref} width={size} height={size} className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
));

export const MessageCircleIcon = forwardRef<SVGSVGElement, IconProps>(({ size = 24, className }, ref) => (
  <svg {...svgBase} ref={ref} width={size} height={size} className={className}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
));
