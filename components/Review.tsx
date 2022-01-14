import { SyntheticEvent, useRef, useState } from "react";
import BorderButton from "./BorderButton";
import classes from "./Review.module.scss";

const Review = (): JSX.Element => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [isHelpful, setIsHelpful] = useState<"yes" | "no">();

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!ref.current) return;
    if (!isHelpful && !isHelpful) return;
    console.log(isHelpful);
    console.log(ref.current.value);
  };

  return (
    <aside className={classes.container}>
      <div className={classes.title}>Was this article helpful?</div>
      <div className={classes.btnContainer}>
        <BorderButton
          leftIcon="mood"
          label="Yes"
          className={`${classes.yes} ${
            isHelpful === "yes"
              ? classes.active
              : isHelpful === "no"
              ? classes.inactive
              : ""
          }`}
          onClick={() => setIsHelpful("yes")}
        />
        <BorderButton
          leftIcon="sentiment_dissatisfied"
          label="No"
          className={`${classes.no} ${
            isHelpful === "no"
              ? classes.active
              : isHelpful === "yes"
              ? classes.inactive
              : ""
          }`}
          onClick={() => setIsHelpful("no")}
        />
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <label className={classes.label}>
          Please share any additional feedback
        </label>
        <textarea
          ref={ref}
          className={`${classes.input} roundScrollbar`}
        ></textarea>
        <button
          className={classes.submit}
          type="submit"
          onClick={submitHandler}
        >
          Submit <i className="material-icons-outlined">arrow_forward</i>
        </button>
      </form>
    </aside>
  );
};

export default Review;
