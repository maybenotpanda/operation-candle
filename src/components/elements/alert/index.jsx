// ** React Imports
import React from 'react'

const Alert = ({ button, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="font-pixel mb-4">Game Over</h2>
        {button ? children : null}
      </div>
    </div>
  )
}

export default Alert
// <p className="mb-6">You answered incorrectly or ran out of time!</p>