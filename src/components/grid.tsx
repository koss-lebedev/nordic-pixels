import React from 'react'
import Thumbnail from './thumbnail'

type Props = {
  pictures: readonly Picture[]
  onPictureClick: (picture: Picture) => void
}

const Grid = ({ pictures, onPictureClick }: Props) => {
  return (
    <div className="thumbnails">
      {pictures.map(picture => (
        <Thumbnail
          key={picture.url}
          picture={picture}
          onClick={onPictureClick}
        />
      ))}
    </div>
  )
}

export default Grid
