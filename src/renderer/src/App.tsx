import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/auth/ProtectedRoute'
import fullLogo from './assets/full-logo.png'
import nakprcLogo from './assets/nakprc.webp'
import YourName from './pages/YourName'

interface MenuItem {
  name: string
  icon: string
  description: string
}

const menuItems: MenuItem[] = [
  {
    name: 'Home',
    icon: 'https://via.placeholder.com/24/FF0000',
    description: 'Go to the Home page'
  },
  {
    name: 'Settings',
    icon: 'https://via.placeholder.com/24/00FF00',
    description: 'Adjust your preferences'
  },
  {
    name: 'About',
    icon: 'https://via.placeholder.com/24/0000FF',
    description: 'Learn more about us'
  }
]

function App(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <>
      <div className="h-full w-full flex items-center justify-center">
        {/* Drawer Start */}
        <div
          className={`flex flex-col h-screen ${isOpen ? 'w-48' : 'w-16'} bg-gray-800 text-gray-200 transition-width duration-300`}
        >
          <div
            className="flex justify-center items-center h-16 w-16 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // X (Close) Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center h-16 pl-4 cursor-pointer hover:bg-gray-700 relative"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img src={item.icon} alt={item.name} className="h-6 w-6 mr-4" />
              {isOpen && <span className="text-lg">{item.name}</span>}
              {/* Show additional content on hover */}
              {hoveredItem === item.name && (
                <span className="absolute left-full top-1/2 transform -translate-y-1/2 bg-gray-600 text-gray-200 text-sm p-2 rounded-md shadow-lg w-40 ml-2">
                  {item.description}
                </span>
              )}
            </div>
          ))}
        </div>
        {/* Drawer End */}

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
      <div className="bg-white w-full">
        <footer className="text-black font-extrabold text-center p-4 flex justify-around flex-wrap">
          <img src={fullLogo} className="h-14" alt="Full logo" />
          &#169; by AJIT KUMAR PANDIT (Powered by nAkprcSoft Technologies)
          <img src={nakprcLogo} className="h-14" alt="Nakprc logo" />
        </footer>
      </div>
    </>
  )
}

export default App
