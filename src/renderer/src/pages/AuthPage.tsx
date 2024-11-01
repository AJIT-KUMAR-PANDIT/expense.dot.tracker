import { useState } from 'react'

interface User {
  email: string
  password: string
  confirmPassword: string
}

const AuthPage = (): JSX.Element => {
  const [isLogin, setIsLogin] = useState(true)
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (isLogin) {
      if (!user.email || !user.password) {
        setError('Please fill in all fields')
      } else {
        // Call login API
        console.log('Login:', user)
      }
    } else {
      if (!user.email || !user.password || !user.confirmPassword) {
        setError('Please fill in all fields')
      } else if (user.password !== user.confirmPassword) {
        setError('Passwords do not match')
      } else {
        // Call signup API
        console.log('Signup:', user)
      }
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
          <p className="text-red-500 text-xs mt-2">{error}</p>
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
  )
}

export default AuthPage
