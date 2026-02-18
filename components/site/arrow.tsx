import React from "react"

type Point = {
  x: number
  y: number
}

type CurvedArrowProps = {
  start?: Point
  end?: Point
  control1?: Point
  control2?: Point
  color?: string
  strokeWidth?: number
  className?: string
  flip?: boolean
  width?: number
  height?: number
}

export const CurvedArrow: React.FC<CurvedArrowProps> = ({
  start = { x: 40, y: 260 },
  control1 = { x: 200, y: 40 },
  control2 = { x: 400, y: 40 },
  end = { x: 560, y: 180 },
  color = "black",
  strokeWidth = 4,
  className = "",
  flip = false,
  width= 100,
  height= 100,
}) => {
  const d = `
    M ${start.x} ${start.y}
    C ${control1.x} ${control1.y},
      ${control2.x} ${control2.y},
      ${end.x} ${end.y}
  `

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 600 300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="14"
          markerHeight="14"
          refX="12"
          refY="7"
          orient="auto"
        >
          <polygon points="0 0, 14 7, 0 14" fill={color} />
        </marker>
      </defs>

      <path
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  )
}
