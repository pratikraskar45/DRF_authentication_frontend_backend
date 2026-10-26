

const API_BASE_URL = "http://127.0.0.1:8000/api"

export interface SignupRequest {
  username: string
  email: string
  password: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  message: string
  access: string
  refresh: string
  user: {
    id: number
    username: string
    email: string
  }
}

export const signup = async (
  data: SignupRequest
) => {
  const response = await fetch(
    `${API_BASE_URL}/signup/`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }
  )

  const result = await response.json()

  if (!response.ok) {
    throw new Error(
      result.message || "Signup failed"
    )
  }

  return result
}


export const login = async (
  data: LoginRequest
): Promise<LoginResponse> => {

  const response = await fetch(
    `${API_BASE_URL}/login/`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }
  )

  const result = await response.json()

  if (!response.ok) {
    throw new Error(
      result.message || "Login failed"
    )
  }

  return result
}