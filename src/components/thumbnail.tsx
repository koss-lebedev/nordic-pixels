import React from 'react'

type Props = {
  picture: Picture
  onClick: (picture: Picture) => void
}

const Thumbnail = ({ picture, onClick }: Props) => {
  return (
    <div className="thumbnail" onClick={() => onClick(picture)}>
      <div
        className="thumbnail-image"
        style={{
          backgroundImage: `url(${picture.url})`,
        }}
      />
    </div>
  )
}

export default Thumbnail
