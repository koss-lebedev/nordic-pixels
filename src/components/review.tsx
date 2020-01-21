import React from 'react'
import { motion, Variants } from 'framer-motion'
import SlideToConfirm from './slide-to-confirm'

type Props = {
  onComplete: () => void
}

const props: ReadonlyArray<{ name: string; value: string }> = [
  { name: 'SKU', value: 'Printed photo' },
  { name: 'Delivery type', value: 'expedited' },
  { name: 'Price', value: '$5.99' },
]

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const Review = ({ onComplete }: Props) => {
  return (
    <div className="review-screen">
      <div>
        <h2>Review your order</h2>
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {props.map(prop => (
            <motion.li key={prop.name} variants={itemVariants}>
              <span>{prop.name}</span>
              <span>{prop.value}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <SlideToConfirm
        onConfirm={onComplete}
        label="slide to purchase"
      />
    </div>
  )
}

export default Review
