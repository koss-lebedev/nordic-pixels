import React, { forwardRef, Ref } from 'react'

type Props = {
  picture: Picture
  onClick: (picture: Picture) => void
}

const Thumbnail = forwardRef(
  ({ picture, onClick }: Props, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        className="thumbnail"
        onClick={() => onClick(picture)}
        ref={ref}
      >
        <div
          className="thumbnail-image"
          style={{
            backgroundImage: `url(${picture.url})`,
          }}
        />
      </div>
    )
  }
)

export default Thumbnail
