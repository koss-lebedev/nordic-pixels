import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Box = styled.div`
  width: 10rem;
  height: 10rem;
  background: #09f;
`

const MotionBox = motion.custom(Box)

const Sandbox = () => {
  return (
    <section className="sandbox-screen">
      <MotionBox
        animate={{
          x: 200,
        }}
      />
    </section>
  )
}

export default Sandbox
