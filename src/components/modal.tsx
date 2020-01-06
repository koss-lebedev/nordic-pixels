import React, { FC } from 'react'
import { motion } from 'framer-motion'

type Props = {
  onClose: () => void
}

const Modal: FC<Props> = ({ children, onClose }) => {
  return (
    <>
      <motion.div
        className="overlay"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        onClick={() => onClose()}
      />
      <motion.div
        className="modal-panel"
        initial={{
          y: 1000,
        }}
        animate={{
          y: 0,
        }}
      >
        {children}
      </motion.div>
    </>
  )
}

export default Modal
