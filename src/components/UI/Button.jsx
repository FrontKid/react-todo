//styles
import style from './Button.module.scss'

//button component
const Button = (props) => {
  const { children, disabled = false } = props
  return (
    <button
      {...props}
      className={style.button}
      disabled={disabled}>{children}</button>
  )
}

export default Button