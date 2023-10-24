import './TextField.css'

export interface TextFieldProps extends React.PropsWithChildren {
  className?: string
}

const TextField = ({
  children,
  className,
}: TextFieldProps) => {
  return (
    <div className={ `text-field ${className}` }>
      { children }
    </div>
  )
}

export default TextField
