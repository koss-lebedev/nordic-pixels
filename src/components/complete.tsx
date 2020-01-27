import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  onComplete: () => void
}

const Complete = ({ onComplete }: Props) => {
  return (
    <div className="complete-screen">
      <svg viewBox="0 0 53.19 53.19">
        <g>
          <motion.circle
            stroke="#51e051"
            strokeWidth={3}
            fill="transparent"
            cx={26.59}
            cy={26.59}
            r={24}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
          />
          <motion.path
            stroke="#51e051"
            strokeWidth={3}
            strokeLinecap="round"
            fill="transparent"
            d="M12.29 26.59l10.98 10.42 17.49-18.23"
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: 1,
              pathLength: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          />
        </g>
      </svg>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.7,
          repeatDelay: 1,
        }}
        onAnimationComplete={() => onComplete()}
      >
        Thank you for <br /> your order
      </motion.h1>
    </div>
  )
}

export default Complete
