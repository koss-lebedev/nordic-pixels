import React from 'react'

type Props = {
  onComplete: () => void
}

const Complete = ({ onComplete }: Props) => {
  return (
    <div className="complete-screen">
      <svg viewBox="0 0 53.19 53.19">
        <g>
          <circle
            stroke="#51e051"
            strokeWidth={3}
            fill="transparent"
            cx={26.59}
            cy={26.59}
            r={24}
          />
          <path
            stroke="#51e051"
            strokeWidth={3}
            strokeLinecap="round"
            fill="transparent"
            d="M12.29 26.59l10.98 10.42 17.49-18.23"
          />
        </g>
      </svg>

      <h1>
        Thank you for <br /> your order
      </h1>
    </div>
  )
}

export default Complete
