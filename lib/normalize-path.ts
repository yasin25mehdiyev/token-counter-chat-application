export const normalizePath = (path: string) => (path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path)
