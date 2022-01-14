import classes from "./BorderButton.module.scss";

interface Props {
  label: string;
  title?: string;
  className?: string;
  leftIcon?: string;
  rightIcon?: string;
  onClick?: () => void;
}

const BorderButton = ({
  className,
  leftIcon,
  rightIcon,
  label,
  title,
  onClick,
}: Props): JSX.Element => {
  return (
    <button
      className={`${classes.button} ${className}`}
      title={title || label}
      onClick={onClick}
    >
      {leftIcon && <i className="material-icons-outlined">{leftIcon}</i>}
      <span>{label}</span>
      {rightIcon && <i className="material-icons-outlined">{rightIcon}</i>}
    </button>
  );
};

export default BorderButton;
