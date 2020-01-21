import React from 'react'
import { motion, useAnimation, PanInfo } from 'framer-motion'

type Props = {
  label: string
  onConfirm: () => void
}

const RIGHT_OFFSET = 260
const MARGIN_OF_ERROR = 20

const SlideToConfirm = ({ label, onConfirm }: Props) => {
  const controls = useAnimation()

  const handlePan = (event: any, info: PanInfo) => {
    if (info.offset.x > 0 && info.offset.x <= RIGHT_OFFSET) {
      controls.set({
        x: info.offset.x,
      })
    }
  }

  const handlePanEnd = (event: any, info: PanInfo) => {
    if (info.offset.x > RIGHT_OFFSET - MARGIN_OF_ERROR) {
      onConfirm()
    } else {
      controls.start({ x: 0 })
    }
  }

  return (
    <div className="slide-to-confirm">
      <span>{label}</span>
      <motion.div
        className="toggle"
        animate={controls}
        onPan={handlePan}
        onPanEnd={handlePanEnd}
      >
        &#187;
      </motion.div>
    </div>
  )
}

export default SlideToConfirm
