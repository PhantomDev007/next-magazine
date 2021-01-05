import { CSSProperties, MouseEvent } from 'react'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  style?: CSSProperties
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, onClick, className, style }: Props) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={cn(
        'p-2 w-max rounded-xl disabled:opacity-50 hover:bg-primary-2',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
