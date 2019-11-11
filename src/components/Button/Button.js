import React from "react";
import './style.css';

// /** Свойства компонента Button. */
// interface IProps {
// /** Текст Button */
// text?: string;
// /** Блокировка Button */
// disabled?: boolean;
// /** Button onClick function */
// onClick?: () => void;
// /** Наименование иконки */
// iconName?: string | null;
// }

/** Компонент Button. */
const Button = ({
  text,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
    >
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;