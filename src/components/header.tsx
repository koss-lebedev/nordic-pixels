import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  order: OrderField
  onOrderChange: (newOrder: OrderField) => void
}

const Header = ({ onOrderChange, order }: Props) => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          Nordic<span>Pixels</span>
        </div>
        <div className="sort-buttons">
          <motion.button
            className={`sort-button`}
            onClick={() => onOrderChange('rating')}
            initial={{
              opacity: 0.3,
            }}
            animate={{
              opacity: order === 'rating' ? 1 : 0.3,
            }}
          >
            <img src="/star.svg" alt="" /> most rated
          </motion.button>
          <motion.button
            className={`sort-button`}
            onClick={() => onOrderChange('views')}
            initial={{
              opacity: 0.3,
            }}
            animate={{
              opacity: order === 'views' ? 1 : 0.3,
            }}
          >
            <img src="/eye.svg" alt="" /> most viewed
          </motion.button>
        </div>
      </div>
    </header>
  )
}

export default Header
