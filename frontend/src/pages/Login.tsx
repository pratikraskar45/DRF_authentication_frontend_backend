import { useState } from "react"
import { login } from "../api/authApi"


function Login() {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault()

  try {
  const response = await login({
    email,
    password,
  })

  // Store JWT tokens
  localStorage.setItem("access_token", response.access)
  localStorage.setItem("refresh_token", response.refresh)

  console.log("Login response:", response)

  alert("Login successful!")
} catch (error) {
  if (error instanceof Error) {
    alert(error.message)
  } else {
    alert("Something went wrong")
  }
}
}

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to your account
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-5"
        >

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>

      </div>

    </div>
  )
}

export default Login