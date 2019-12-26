import React, { FC } from 'react'

type Props = {
  onClose: () => void
}

const Modal: FC<Props> = ({ children, onClose }) => {
  return (
    <>
      <div className="overlay" onClick={() => onClose()} />
      <div className="modal-panel">{children}</div>
    </>
  )
}

export default Modal
