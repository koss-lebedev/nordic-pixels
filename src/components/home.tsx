import React, { useState } from 'react'
import sortBy from 'lodash.sortby'
import Header from './header'
import Grid from './grid'
import Details from './details'
import pictures from '../data'

const Home = () => {
  const [order, setOrder] = useState<OrderField>('rating')
  const [selected, setSelected] = useState<Picture | null>(null)

  return (
    <div className="home-screen">
      <Header onOrderChange={setOrder} order={order} />
      <Grid
        pictures={sortBy(pictures, order)}
        onPictureClick={setSelected}
      />
      {selected && (
        <Details
          onClose={() => setSelected(null)}
          picture={selected}
        />
      )}
    </div>
  )
}

export default Home
