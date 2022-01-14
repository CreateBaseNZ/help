import Image, { ImageProps } from "next/image";

import classes from "./ImageWithAttr.module.scss";

interface Props extends ImageProps {
  attr: string;
  alt: string;
}

const ImageWithAttr = ({ attr, alt, ...rest }: Props): JSX.Element => {
  return (
    <div className={classes.container}>
      <Image {...rest} alt={alt} />
      <span className={classes.attr}>{attr}</span>
    </div>
  );
};

export default ImageWithAttr;
