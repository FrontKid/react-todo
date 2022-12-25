//react
import React from 'react'

//styles
import style from './Button.module.scss'

//types

type TButtonProps = {
  children: React.ReactNode;
  onclickHendler?: () => void;
  title?: string;
  disabled?: boolean;
  className?: string;
  type?: string;
}

const Button: React.FC<TButtonProps> = (props) => {
  const { children, onclickHendler, title, disabled = false } = props

  return (
    <button
      title={title}
      onClick={onclickHendler}
      className={style.button}
      disabled={disabled}
    >{children}</button>
  )
}
export default Button