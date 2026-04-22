export function isAuthenticated(): boolean {
  return !!localStorage.getItem("crag-session");
}
