export function isAuthenticated(): boolean {
  return !!localStorage.getItem("crag-token");
}

// SECURITY: never log token
