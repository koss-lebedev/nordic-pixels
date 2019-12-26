import React from 'react'

type Props = {
  order: OrderField
  onOrderChange: (newOrder: OrderField) => void
}

const Header = ({ onOrderChange, order }: Props) => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          Nordic<span>Pixels</span>
        </div>
        <div className="sort-buttons">
          <button
            className={`sort-button ${
              order === 'rating' ? 'active' : ''
            }`}
            onClick={() => onOrderChange('rating')}
          >
            <img src="/star.svg" alt="" /> most rated
          </button>
          <button
            className={`sort-button ${
              order === 'views' ? 'active' : ''
            }`}
            onClick={() => onOrderChange('views')}
          >
            <img src="/eye.svg" alt="" /> most viewed
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
