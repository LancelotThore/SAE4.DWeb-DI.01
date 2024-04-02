import { cva } from "class-variance-authority";

// Base definition
const base = "";

const button = cva(base, {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "rounded-md",
        "font-bold"
      ],
      secondary: [
        "bg-red-600",
        "text-gray-200",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
      tertiary: [
        "text-start",
        "text-textButton",
        "font-bold",
        "bg-gradient-to-r from-buttonA to-buttonB",
        "hover:bg-gray-100",
        "rounded"
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