import React from 'react'

const Time: React.FC = () => {
  const getFormattedDate = (): string => {
    const date = new Date()
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', weekday: 'long' }
    return date.toLocaleDateString('en-GB', options)
  }

  return (
    <div>
      <p>{getFormattedDate()}</p>
    </div>
  )
}

export default Time
