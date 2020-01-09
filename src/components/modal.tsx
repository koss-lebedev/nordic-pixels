import React, { FC } from 'react'
import { motion, Variants } from 'framer-motion'

type Props = {
  onClose: () => void
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const panelVariants: Variants = {
  hidden: { y: 1000 },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 300,
    },
  },
}

const Modal: FC<Props> = ({ children, onClose }) => {
  return (
    <>
      <motion.div
        className="overlay"
        initial="hidden"
        animate="visible"
        onClick={() => onClose()}
        variants={overlayVariants}
      />
      <motion.div
        className="modal-panel"
        initial="hidden"
        animate="visible"
        variants={panelVariants}
      >
        {children}
      </motion.div>
    </>
  )
}

export default Modal
