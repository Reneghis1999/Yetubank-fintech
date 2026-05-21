// lib/auth.ts

export type User = {
  id: string
  email: string
}

const STORAGE_KEY = "yetubank-user"

/**
 * Simule une inscription utilisateur
 */
export async function registerUser(
  email: string,
  password: string
): Promise<User> {
  // simulation API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const user: User = {
    id: crypto.randomUUID(),
    email,
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))

  return user
}

/**
 * Simule une connexion utilisateur
 */
export async function loginUser(
  email: string,
  password: string
): Promise<User> {
  // simulation API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const user: User = {
    id: crypto.randomUUID(),
    email,
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))

  return user
}

/**
 * Récupère l'utilisateur connecté
 */
export function getCurrentUser(): User | null {
  if (typeof window === "undefined") {
    return null
  }

  const user = localStorage.getItem(STORAGE_KEY)

  if (!user) {
    return null
  }

  return JSON.parse(user)
}

/**
 * Vérifie si l'utilisateur est connecté
 */
export function isAuthenticated(): boolean {
  return !!getCurrentUser()
}

/**
 * Déconnexion utilisateur
 */
export function logoutUser(): void {
  localStorage.removeItem(STORAGE_KEY)
}