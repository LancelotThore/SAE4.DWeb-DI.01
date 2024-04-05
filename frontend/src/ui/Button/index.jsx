import { cva } from "class-variance-authority";

// Base definition
const base = "";

const button = cva(base, {
  variants: {
    intent: {
      tertiary: [
        "text-start",
        "text-textButton",
        "font-bold",
        "bg-gradient-to-r from-buttonA to-buttonB",
        "hover:bg-gradient-to-l from-buttonA to-buttonB",
        "rounded",
      ],
      carrouselBtn: [
        "absolute",
        "top-1/2",
        "transform",
      ],
      searchBtn: [
        "rounded-r-lg",
        "flex",
        "items-center",
        "justify-center",
        "text-forground",
        "px-4",
        "py-2",
        "bg-navBackground",
      ],
      connexionBtn: [
        "py-2",
        "px-5",
        "rounded",
        "text-forground",
        "border-2",
        "border-forground",
        "bg-forground/10",
        "hover:bg-forground",
        "hover:text-navBackground",
        "font-bold",
        "text-center",
      ],
      inscriptionBtn: [
        "py-2",
        "px-5",
        "text-center",
        "text-textButton",
        "font-bold",
        "bg-gradient-to-r from-buttonA to-buttonB",
        "hover:bg-gradient-to-l from-buttonA to-buttonB",
        "rounded",
      ],
      svgBtn: [
        "flex",
        "items-center",
        "justify-center",
        "rounded-full",
        "w-12",
        "h-12",
        "bg-navBackground",
        "hover:bg-navBackground/50",
        "text-forground",
      ]
    },
    size: {
      none: ["py-2", "px-2.5"],
      small: ["text-sm", "py-2.5", "px-3.5"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export default function Button({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} />;
}