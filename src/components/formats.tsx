import React from 'react'

type Props = {
  src: string
}

const Square = ({ src }: Props) => (
  <div
    style={{
      background: `url(${src})`,
      width: 250,
      height: 250,
      backgroundSize: 'cover',
    }}
  />
)

const Portrait = ({ src }: Props) => (
  <div
    style={{
      background: `url(${src})`,
      width: 188,
      height: 250,
      backgroundSize: 'cover',
    }}
  />
)

const Landscape = ({ src }: Props) => (
  <div
    style={{
      background: `url(${src})`,
      width: 350,
      height: 200,
      backgroundSize: 'cover',
    }}
  />
)

export default {
  Square,
  Portrait,
  Landscape,
}
