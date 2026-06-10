const API_URL = "http://127.0.0.1:8000/api"

export type User = {
  id: number
  username: string
  email: string
}

export type Account = {
  username: string
  email: string
  balance: number
  currency: string
}

export type Transaction = {
  id: number
  sender: string
  receiver: string
  amount: string
  transaction_type: string
  created_at: string
}

export type DashboardStats = {
  balance: number
  total_sent: number
  total_received: number
  transaction_count: number
}

/* =========================
   REGISTER
========================= */

export async function registerUser(
  email: string,
  password: string
) {
  const username = email.split("@")[0]

  const response = await fetch(
    `${API_URL}/auth/register/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    }
  )

  if (!response.ok) {
    throw new Error("Erreur inscription")
  }

  return response.json()
}

/* =========================
   LOGIN
========================= */

export async function loginUser(
  email: string,
  password: string
) {
  const username = email.split("@")[0]

  const response = await fetch(
    `${API_URL}/auth/login/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }
  )

  if (!response.ok) {
    throw new Error("Erreur connexion")
  }

  const data = await response.json()

  if (typeof window !== "undefined") {
    localStorage.setItem(
      "access_token",
      data.access
    )

    localStorage.setItem(
      "refresh_token",
      data.refresh
    )
  }

  return data
}

/* =========================
   GET CURRENT USER
========================= */

export async function getCurrentUser() {
  if (typeof window === "undefined") {
    return null
  }

  const token =
    localStorage.getItem("access_token")

  if (!token) {
    return null
  }

  const response = await fetch(
    `${API_URL}/auth/me/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!response.ok) {
    return null
  }

  return response.json()
}

/* =========================
   LOGOUT
========================= */

export function logoutUser() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(
      "access_token"
    )

    localStorage.removeItem(
      "refresh_token"
    )

    window.location.href = "/auth/login"
  }
}

/* =========================
   GET ACCOUNT
========================= */

export async function getAccount() {
  if (typeof window === "undefined") {
    return null
  }

  const token =
    localStorage.getItem("access_token")

  if (!token) {
    return null
  }

  const response = await fetch(
    `${API_URL}/account/me/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!response.ok) {
    console.log(await response.text())

    throw new Error(
      "Erreur récupération compte"
    )
  }

  return response.json()
}

/* =========================
   GET TRANSACTIONS
========================= */

export async function getTransactions() {
  if (typeof window === "undefined") {
    return []
  }

  const token =
    localStorage.getItem("access_token")

  if (!token) {
    return []
  }

  const response = await fetch(
    `${API_URL}/transactions/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error(
      "Erreur récupération transactions"
    )
  }

  return response.json()
}


/* =========================
   GET DASHBOARD STATS
========================= */

export async function getDashboardStats() {
  if (typeof window === "undefined") {
    return null
  }

  const token =
    localStorage.getItem("access_token")

  if (!token) {
    return null
  }

  const response = await fetch(
    `${API_URL}/dashboard/stats/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error(
      "Erreur récupération statistiques"
    )
  }

  return response.json()
}