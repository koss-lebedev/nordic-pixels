import React, { useState } from 'react'
import Formats from './formats'

type Props = {
  picture: Picture
}

const wrap = (index: number, total: number) => {
  if (index < 0) {
    return total - 1
  }
  if (index === total) {
    return 0
  }
  return index
}

const options = [
  {
    label: 'Square (1:1)',
    Component: Formats.Square,
  },
  {
    label: 'Portrait (3:4)',
    Component: Formats.Portrait,
  },
  {
    label: 'Landscape (7:4)',
    Component: Formats.Landscape,
  },
]

const Carousel = ({ picture }: Props) => {
  const [index, setIndex] = useState(0)

  const paginate = (newDirection: number) => {
    const newIndex = wrap(index + newDirection, options.length)
    setIndex(newIndex)
  }

  const Option = options[index]

  return (
    <div>
      <h3>Choose your format</h3>
      <div className="carousel">
        <div className="carousel-item" key={index}>
          <Option.Component src={picture.url} />
        </div>
        <button
          className="carousel-arrow carousel-arrow--left"
          onClick={() => paginate(-1)}
        />
        <button
          className="carousel-arrow carousel-arrow--right"
          onClick={() => paginate(1)}
        />
      </div>
      <div className="carousel-label">
        <span>{options[index].label}</span>
      </div>
    </div>
  )
}

export default Carousel
