//react
import React from 'react'

//styles
import style from './Button.module.scss'

//types
type TButtonProps = {
  children: React.ReactNode;
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<TButtonProps> = ({ children, disabled = false }) => (
  <button
    className={style.button}
    disabled={disabled}>{children}</button>
)
export default Button