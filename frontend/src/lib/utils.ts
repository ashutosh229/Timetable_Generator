import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isValidCourse = (value: string | string[]): boolean => {
  if (typeof value !== "string") return false;

  const trimmed = value.trim();

  // Empty or whitespace
  if (trimmed === "") return false;

  // Matches slot pattern like "B1"
  if (/^[A-Z]\d$/.test(trimmed)) return false;

  // Match patterns like: EE203 or EEL605/DS601
  return /^([A-Z]{2,}\d{3})(\/[A-Z]{2,}\d{3})?$/.test(trimmed);
};

export const arraysEqual = (a: string[], b: string[]) =>
  a.length === b.length && a.every((val) => b.includes(val));

//dummy push
