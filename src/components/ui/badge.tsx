"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn, randomNumber } from "@/lib/utils";
import { useState } from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
// const [bgColor, textColor, dotColor] = randomNumber();

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  const [randomColorGen, setRandomColorGen] = useState(randomNumber);
  return (
    <div
      style={{
        backgroundColor: randomColorGen[0],
      }}
      //************ Custom Padding Left Added / pl-1 ************* */
      className={cn(badgeVariants({ variant }), className, "pl-1")}
      {...props}
    >
      <div className={cn("flexify")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="9"
          viewBox="0 0 24 24"
          fill={randomColorGen[2]}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-dot m-0 mr-1 p-0"
        >
          <circle cx="12.1" cy="12.1" r="10"></circle>
        </svg>
        <p style={{ color: randomColorGen[1] }}>{children}</p>
      </div>
    </div>
  );
}

export { Badge, badgeVariants };
