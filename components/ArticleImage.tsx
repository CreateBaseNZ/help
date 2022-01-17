import Image, { ImageProps } from "next/image";
import classes from "./ArticleImage.module.scss";

interface Props extends ImageProps {
  alt: string;
}

const ArticleImage = ({ alt, ...rest }: Props): JSX.Element => {
  return (
    <figure className={classes.container}>
      <div className={classes.wrapper}>
        <Image
          alt={alt}
          layout="responsive"
          width={1920}
          height={1080}
          {...rest}
        />
      </div>
    </figure>
  );
};

export default ArticleImage;
