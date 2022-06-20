import http from "../utils/http";

export function getData (path: string) {
  return http.get(path)
}