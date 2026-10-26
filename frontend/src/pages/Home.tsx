import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-blue-600">
            MyApp
          </h1>

          <div className="flex items-center gap-3">

            <Link
              to="/login"
              className="px-4 py-2 text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </Link>

          </div>

        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Welcome to MyApp
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            A simple full-stack authentication project built with
            React, TypeScript, Django REST Framework and PostgreSQL.
          </p>

          <div className="mt-8">

            <Link
              to="/signup"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
              Get Started
            </Link>

          </div>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              React + TypeScript
            </h3>

            <p className="mt-2 text-gray-600">
              Build a typed frontend using React and TypeScript.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              Django REST
            </h3>

            <p className="mt-2 text-gray-600">
              Create authentication APIs using Django REST Framework.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              PostgreSQL
            </h3>

            <p className="mt-2 text-gray-600">
              Store user information securely in PostgreSQL.
            </p>
          </div>

        </div>

      </main>

    </div>
  )
}

export default Home