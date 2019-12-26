import React from 'react'

type Props = {
  onComplete: () => void
}

const props: ReadonlyArray<{ name: string; value: string }> = [
  { name: 'SKU', value: 'Printed photo' },
  { name: 'Delivery type', value: 'expedited' },
  { name: 'Price', value: '$5.99' },
]

const Review = ({ onComplete }: Props) => {
  return (
    <div className="review-screen">
      <div>
        <h2>Review your order</h2>
        <ul>
          {props.map(prop => (
            <li key={prop.name}>
              <span>{prop.name}</span>
              <span>{prop.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="button" onClick={() => onComplete()}>
        Place order
      </button>
    </div>
  )
}

export default Review
