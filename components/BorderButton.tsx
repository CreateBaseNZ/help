import classes from "./BorderButton.module.scss";

interface Props {
  className?: string;
  icon?: string;
  label: string;
}

const BorderButton = ({ className, icon, label }: Props): JSX.Element => {
  return (
    <button className={`${classes.button} ${className}`} title={label}>
      {icon && <i className="material-icons-outlined">{icon}</i>}
      <span>{label}</span>
    </button>
  );
};

export default BorderButton;
