import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AppStateType, useTypedDispatch } from "../../../redux/store";
import { PublicationT, requestUserPublication } from "../../../redux/users-reduser";
import style from "./Publication.module.scss";

export const Publication = () => {
  const dispatch = useTypedDispatch();
  const publication = useSelector<AppStateType, PublicationT[]>(
    (state) => state.usersPage.publication
  );
  console.log(publication)
  const params = useParams<"id">();

  useEffect(() => {
    dispatch(requestUserPublication(params.id))
  }, []);
  return (
    <div className={style.publicationBlock}>
      <div className={style.name}>Публикации</div>

      <Swiper slidesPerView={7}>
        {publication.map((p) => {
          return (
            <SwiperSlide key={p.id}>
              <img  src={p.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
