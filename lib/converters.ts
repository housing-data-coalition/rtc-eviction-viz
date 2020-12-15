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

/**
 * Convert the given value to either an integer or just pass it 
 * through if it's null. Throw an error if the conversion doesn't work.
 */
export function toIntOrNull(value: any): number|null {
  if (value === null) return null;
  return toInt(value);
}

/**
 * Ensure the given value is a string, throwing an error otherwise.
 */
export function ensureString(value: any): string {
  if (typeof(value) !== "string") {
    throw new Error(`"${value}" is not a string!`);
  }

  return value;
}
