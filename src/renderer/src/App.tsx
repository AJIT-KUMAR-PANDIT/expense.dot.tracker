// import Versions from './components/Versions'
// import Dashboard from './pages/Dashboard'

import AuthPage from './pages/AuthPage'

function App(): JSX.Element {
  return (
    <>
      <br />
      <div className="h-full w-full flex items-center justify-center ">
        <div className="bg-[#1b1b1f46] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 w-[90vw] h-[90vh] overflow-auto">
          {/* <Dashboard /> */}
          <AuthPage />
        </div>
      </div>
      {/* <Versions></Versions> */}
    </>
  )
}

export default App
