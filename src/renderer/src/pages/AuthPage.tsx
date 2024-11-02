// AuthPage.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser, signupUser } from '../../../db/signalDbConfig'

interface User {
  email: string
  password: string
  confirmPassword?: string
}

interface AuthPageProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthPage: React.FC<AuthPageProps> = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState<string>('')
  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setError('')

    try {
      if (isLogin) {
        if (!user.email || !user.password) {
          setError('Please fill in all fields')
        } else {
          await loginUser(user.email, user.password)
          console.log('Login successful:', user)
          setIsAuthenticated(true)
          navigate('/dashboard')
        }
      } else {
        if (!user.email || !user.password || !user.confirmPassword) {
          setError('Please fill in all fields')
        } else if (user.password !== user.confirmPassword) {
          setError('Passwords do not match')
        } else {
          await signupUser(user.email, user.password)
          console.log('Signup successful:', user)
          setShowPopup(true)
          setIsLogin(true)
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An error occurred')
      }
    }
  }

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="text-3xl font-bold">.Xpense Tracker</div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Signup'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  value={user.confirmPassword}
                  onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                />
              </div>
            )}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              {isLogin ? 'Login' : 'Signup'}
            </button>
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </form>
          <p className="text-gray-700 text-sm mt-4">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button
              className="text-blue-500 hover:text-blue-700 font-bold ml-2"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Signup' : 'Login'}
            </button>
          </p>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h3 className="text-lg font-bold mb-2">Account Created Successfully!</h3>
            <p className="text-gray-700">You can now log in to your account.</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AuthPage
