import React from 'react'
import { motion, useAnimation, PanInfo } from 'framer-motion'

type Props = {
  label: string
  onConfirm: () => void
}

const RIGHT_OFFSET = 260

const SlideToConfirm = ({ label, onConfirm }: Props) => {
  const controls = useAnimation()

  const handlePan = (event: any, info: PanInfo) => {
    const x = info.offset.x
    if (x > 0) {
      controls.set({
        x: x < RIGHT_OFFSET ? x : RIGHT_OFFSET,
      })
    }
  }

  const handlePanEnd = (event: any, info: PanInfo) => {
    if (info.offset.x >= RIGHT_OFFSET) {
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
