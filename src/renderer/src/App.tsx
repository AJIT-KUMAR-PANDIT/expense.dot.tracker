import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/auth/ProtectedRoute'
import fullLogo from './assets/full-logo.png'
import nakprcLogo from './assets/nakprc.webp'
import YourName from './pages/YourName'

function App(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <>
      <div className="h-full w-full flex items-center justify-center ">
        <div className="bg-[#1b1b1f46] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 w-[90vw] h-[90vh] overflow-auto">
          <Router>
            <Routes>
              <Route path="/" element={<AuthPage setIsAuthenticated={setIsAuthenticated} />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/yourname" element={<YourName />} />
            </Routes>
          </Router>
        </div>
      </div>
      <div className="bg-[white] w-full">
        <footer className=" text-black font-extrabold text-center p-4 flex justify-around flex-wrap">
          <img src={fullLogo} className="h-14 " />
          &#169; by AJIT KUMAR PANDIT (Powered by nAkprcSoft Technologies)
          <img src={nakprcLogo} className="h-14 " />
        </footer>
      </div>
      {/* <Versions></Versions> */}
    </>
  )
}

export default App
