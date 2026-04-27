interface TachiMarkProps {
  className?: string
  size?: number
}

export function TachiMark({ className, size = 28 }: TachiMarkProps) {
  return (
    <img
      src="/t-mark.svg"
      alt="TAURUS"
      width={size}
      height={size}
      className={className}
    />
  )
}

interface TachiWordmarkProps {
  className?: string
  height?: number
}

export function TachiWordmark({ className, height = 38 }: TachiWordmarkProps) {
  return (
    <img
      src="/logo.svg"
      alt="TAURUS Vault"
      height={height}
      className={className}
      style={{ height }}
    />
  )
}
