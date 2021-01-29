import React from "react"

const LoadingIcon = props => {
  return (
    <svg width={32} height={32} fill="#999" {...props}>
      <path
        opacity={0.25}
        d="M16 0a16 16 0 000 32 16 16 0 000-32m0 4a12 12 0 010 24 12 12 0 010-24"
      />
      <path d="M16 0a16 16 0 0116 16h-4A12 12 0 0016 4z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 16 16"
          to="360 16 16"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

export default LoadingIcon
