import React from 'react'
import { motion } from 'framer-motion'

const Sandbox = () => {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <section className="sandbox-screen">
      <button onClick={() => setExpanded(!expanded)}>Toggle</button>
      <motion.div
        className="box"
        animate={{
          width: expanded ? 'calc(100vw - 4rem)' : 100,
        }}
      />
    </section>
  )
}

export default Sandbox
