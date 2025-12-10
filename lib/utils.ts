import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const handleCopy = async () => {
  if (typeof window !== "undefined") {
    await navigator.clipboard.writeText("eliaakjtrnq@gmail.com");
  }
};