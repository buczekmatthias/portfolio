import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFileUrl(relativePath: string): string {
  return new URL(`../assets/${relativePath}`, import.meta.url).href;
}
