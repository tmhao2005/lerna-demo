export function isNumber(value: string | number): value is number {
  return !Number.isNaN(value)
}
