export function isArray<T = any>(value: any): value is Array<T> {
  return Array.isArray(value)
}
