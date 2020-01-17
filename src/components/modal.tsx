import React, { FC } from 'react'
import { motion, Variants, PanInfo } from 'framer-motion'

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
  const handleDragEnd = (event: any, info: PanInfo) => {
    if (info.offset.y > 200) {
      onClose()
    }
  }

  return (
    <>
      <motion.div
        className="overlay"
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={() => onClose()}
        variants={overlayVariants}
      />
      <motion.div
        className="modal-panel"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={panelVariants}
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 0,
        }}
        dragElastic={0.8}
        onDragEnd={handleDragEnd}
      >
        <div className="handle" />
        <motion.div
          className="modal-body"
          drag="y"
          dragConstraints={{
            top: 0,
            bottom: 0,
          }}
          dragElastic={0}
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Modal
