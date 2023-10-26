import { ButtonStyles } from '@/types/ButtonStyles'
import './Button.css'

export interface ButtonProps extends React.PropsWithChildren {
  style?: ButtonStyles
  className?: string
}

const Button = ({
  style = ButtonStyles.Primary,
  className,
  children,
}: ButtonProps) => {


  return (
    <button className={ `button button--${style} ${className ? className : ''}` }>
      { children }
    </button>
  )
}

export default Button
