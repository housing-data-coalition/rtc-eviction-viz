import { type } from "os";

/**
 * Convert the given value to an integer, throwing an error if
 * the conversion doesn't work.
 */
export function toInt(value: any): number {
  const result = parseInt(value);
  if (isNaN(result)) {
    throw new Error(`"${value}" is not an integer!`);
  }
  return result;
}

export function toIntOrNull(value: any): number|null {
  if (value === null) return null;
  return toInt(value);
}

export function ensureString(value: any): string {
  if (typeof(value) !== "string") {
    throw new Error(`"${value}" is not a string!`);
  }

  return value;
}
