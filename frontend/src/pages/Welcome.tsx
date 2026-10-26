import { useNavigate } from "react-router-dom"

function Welcome() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")

    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome 🎉
        </h1>

        <p className="text-gray-600 mt-3">
          You are successfully logged in.
        </p>

        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Welcome