import './Input.css'

export interface InputProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLElement> {
  className?: string
}

const Input = ({
  children,
  className,
}: InputProps) => {
  return (
    <>
      <input type="text" className={ `${className ? className : '' }input` } placeholder={ children?.toString() } />
    </>
  )
}

export default Input
