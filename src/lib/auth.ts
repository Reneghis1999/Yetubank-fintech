// lib/auth.ts

export interface User {
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
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const user: User = {
    id: crypto.randomUUID(),
    email,
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(user)
  )

  return user
}

/**
 * Simule une connexion utilisateur
 */
export async function loginUser(
  email: string,
  password: string
): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const user: User = {
    id: crypto.randomUUID(),
    email,
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(user)
  )

  return user
}

/**
 * Récupère utilisateur connecté
 */
export function getCurrentUser(): User | null {
  if (typeof window === "undefined") {
    return null
  }

  const storedUser = localStorage.getItem(STORAGE_KEY)

  if (!storedUser) {
    return null
  }

  try {
    const parsedUser: User = JSON.parse(storedUser)

    return parsedUser
  } catch (error) {
    console.error("Erreur parsing user:", error)

    return null
  }
}

/**
 * Vérifie authentification
 */
export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}

/**
 * Déconnexion utilisateur
 */
export function logoutUser(): void {
  localStorage.removeItem(STORAGE_KEY)
}