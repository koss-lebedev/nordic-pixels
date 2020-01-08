import React from 'react'
import { motion, MotionProps } from 'framer-motion'

type Props = {
  picture: Picture
  onClick: (picture: Picture) => void
} & MotionProps

const Thumbnail = ({ picture, onClick, ...motionProps }: Props) => {
  return (
    <motion.div
      className="thumbnail"
      onClick={() => onClick(picture)}
      {...motionProps}
    >
      <div
        className="thumbnail-image"
        style={{
          backgroundImage: `url(${picture.url})`,
        }}
      />
    </motion.div>
  )
}

export default Thumbnail
