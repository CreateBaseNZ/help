import classes from "./SearchBar.module.scss";

interface Props {
  ref: any; // TODO
  className: string;
  submitHandler: any; // TODO
  placeholder?: string;
}

const SearchBar = ({
  ref,
  className,
  submitHandler,
  placeholder = " ",
}: Props): JSX.Element => {
  return (
    <div className={`${classes.container} ${className}`}>
      <input ref={ref} className={classes.input} placeholder={placeholder} />
      <i
        className={`material-icons-outlined ${classes.magnifyingGlass}`}
        title="Search"
      >
        search
      </i>
      <i
        className={`material-icons-outlined ${classes.arrow}`}
        onClick={submitHandler}
        title="Enter"
      >
        arrow_forward
      </i>
    </div>
  );
};

export default SearchBar;