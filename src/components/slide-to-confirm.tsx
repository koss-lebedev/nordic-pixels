import React from 'react'
import {
  motion,
  useAnimation,
  PanInfo,
  useMotionValue,
  useTransform,
} from 'framer-motion'

type Props = {
  label: string
  onConfirm: () => void
}

const RIGHT_OFFSET = 260

const SlideToConfirm = ({ label, onConfirm }: Props) => {
  const controls = useAnimation()
  const offset = useMotionValue(0)
  const opacity = useTransform(offset, [0, RIGHT_OFFSET], [1, 0])
  const background = useTransform(
    offset,
    [0, RIGHT_OFFSET],
    ['#3b96fa', '#96ea64']
  )

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
    <motion.div className="slide-to-confirm" style={{ background }}>
      <motion.span style={{ opacity }}>{label}</motion.span>
      <motion.div
        className="toggle"
        animate={controls}
        onPan={handlePan}
        onPanEnd={handlePanEnd}
        style={{
          x: offset,
        }}
      >
        &#187;
      </motion.div>
    </motion.div>
  )
}

export default SlideToConfirm
