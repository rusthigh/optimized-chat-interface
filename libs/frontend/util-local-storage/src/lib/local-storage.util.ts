export const getFromLocalStorage = <T>(
  key: string,
  initialValue: T | null = null
): T => {
  if (localStorage.getItem(key) === null && initialValue !== null) {
    p