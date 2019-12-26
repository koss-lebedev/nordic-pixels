import React from 'react'
import Carousel from './carousel'

type Props = {
  onComplete: () => void
  picture: Picture
}

const Customize = ({ onComplete, picture }: Props) => {
  return (
    <div className="customize-screen">
      <Carousel picture={picture} />
      <button className="button" onClick={() => onComplete()}>
        Continue
      </button>
    </div>
  )
}

export default Customize
