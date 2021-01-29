import React from "react"

function LoadingIcon(props) {
  return (
    <svg width={128} height={128} {...props}>
      <g>
        <linearGradient id="a">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" />
        </linearGradient>
        <path
          d="M63.85 0A63.85 63.85 0 110 63.85 63.85 63.85 0 0163.85 0zm.65 19.5a44 44 0 11-44 44 44 44 0 0144-44z"
          fill="url(#a)"
          fillRule="evenodd"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 64 64"
          to="360 64 64"
          dur="1080ms"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  )
}
