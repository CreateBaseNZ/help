import { useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import ImageWithAttr from "./ImageWithAttr";

import RESOURCES from "../resources/resources";
import "swiper/css";
import "swiper/css/pagination";
import classes from "./Resources.module.scss";

SwiperCore.use([Pagination]);

const Resources = (): JSX.Element => {
  const router = useRouter();
  const [activePage, setActivePage] = useState(0);

  return (
    <div className={classes.container}>
      <h2>Resources</h2>
      <Swiper
        slidesPerView="auto"
        spaceBetween={32}
        pagination={{
          clickable: true,
          el: `.${classes.pagination}`,
          bulletElement: "div",
          bulletClass: classes.bullet,
          bulletActiveClass: classes.activeBullet,
        }}
        onSlideChange={(swiper) => setActivePage(swiper.activeIndex)}
        touchEventsTarget="container"
        className={classes.wrapper}
      >
        {RESOURCES.map((resource, i) => (
          <SwiperSlide
            onClick={() => router.push(resource.url)}
            key={resource.url}
            className={`${classes.resource} ${
              activePage === i ? classes.active : ""
            }`}
            title={resource.title}
          >
            <div className={classes.imgContainer}>
              <ImageWithAttr
                src={resource.img}
                alt={resource.title}
                attr="Illustration by Storyset"
                layout="fill"
              />
            </div>
            <span>{resource.title}</span>
            <button>
              {resource.actionLabel}
              <i className="material-icons-outlined">arrow_forward</i>
            </button>
          </SwiperSlide>
        ))}
        <div className={classes.pagination} />
      </Swiper>
    </div>
  );
};

export default Resources;
