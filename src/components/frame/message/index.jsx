// ** React Imports
import Alert from 'components/elements/alert'
import Button from 'components/elements/button'
import React from 'react'

const Message = ({ onClick }) => {
  return (
    <Alert button="true">
      <Button onClick={onClick}>Restart</Button>
    </Alert>
  )
}

export default Message