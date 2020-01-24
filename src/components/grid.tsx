import React from 'react'
import Thumbnail from './thumbnail'
import { Variants, useReducedMotion } from 'framer-motion'

type Props = {
  pictures: readonly Picture[]
  onPictureClick: (picture: Picture) => void
}

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.1 * Math.floor(index / 3),
    },
  }),
}

const Grid = ({ pictures, onPictureClick }: Props) => {
  const isReduced = useReducedMotion()

  return (
    <div className="thumbnails">
      {pictures.map((picture, index) => (
        <Thumbnail
          key={picture.url}
          picture={picture}
          onClick={onPictureClick}
          positionTransition={
            isReduced
              ? false
              : {
                  type: 'tween',
                  ease: 'easeInOut',
                }
          }
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={index}
        />
      ))}
    </div>
  )
}

export default Grid
