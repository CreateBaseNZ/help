import classes from "./BorderButton.module.scss";

interface Props {
  label: string;
  className?: string;
  leftIcon?: string;
  rightIcon?: string;
}

const BorderButton = ({
  className,
  leftIcon,
  rightIcon,
  label,
}: Props): JSX.Element => {
  return (
    <button className={`${classes.button} ${className}`} title={label}>
      {leftIcon && <i className="material-icons-outlined">{leftIcon}</i>}
      <span>{label}</span>
      {rightIcon && <i className="material-icons-outlined">{rightIcon}</i>}
    </button>
  );
};

export default BorderButton;
