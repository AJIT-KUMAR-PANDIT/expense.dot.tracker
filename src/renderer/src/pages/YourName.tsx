import React, { useState } from 'react'
import fullLogo from '@renderer/assets/full-logo.png'

interface FormData {
  yourName: string
}

const YourName = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    yourName: ''
  })

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setIsFormSubmitted(true)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center w-full max-w-6xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
        <div className="w-1/3 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 md:p-6 lg:p-8">
          <img src={fullLogo} alt="Logo" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="w-2/3 md:w-1/2 lg:w-2/3 xl:w-2/3 p-4 md:p-6 lg:p-8">
          <h2 className="text-lg font-bold mb-4">Your Name</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yourName">
                Your Name
              </label> */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="yourName"
                type="text"
                name="yourName"
                value={formData.yourName}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            {isFormSubmitted && <p className="text-green-500 mt-4">Form submitted successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default YourName
