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
        "hover:bg-gray-100",
        "rounded"
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
    },
    size: {
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