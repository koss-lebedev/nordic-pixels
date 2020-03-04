import React from 'react'
import { motion } from 'framer-motion'

const Sandbox = () => {
  return (
    <section className="sandbox-screen">
      <motion.div
        className="box"
        animate={{
          x: 300,
          y: 300,
        }}
        transition={{
          x: {
            type: 'tween',
            duration: 1,
          },
          y: {
            type: 'tween',
            duration: 2,
          },
        }}
      />
    </section>
  )
}

export default Sandbox
