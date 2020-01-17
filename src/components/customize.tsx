import React from 'react'
import { motion } from 'framer-motion'
import Carousel from './carousel'

type Props = {
  onComplete: () => void
  picture: Picture
}

const Customize = ({ onComplete, picture }: Props) => {
  return (
    <div className="customize-screen">
      <Carousel picture={picture} />
      <motion.button
        className="button"
        onClick={() => onComplete()}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        Continue
      </motion.button>
    </div>
  )
}

export default Customize
