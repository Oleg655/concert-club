import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ShippingField } from "../../../../api/Api";
import { Header } from "../../../../Header";
import { useTypedDispatch } from "../../../../redux/store";
import { leaveComment } from "../../../../redux/users-reduser";
import style from "./Form.module.scss";

export const Form = () => {
  const params = useParams<"id">();
  const dispatch = useTypedDispatch();
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isValid },
  } = useForm<ShippingField>({
    mode: "all",
  });
  const onSubmit: SubmitHandler<ShippingField> = (data) => {
    dispatch(leaveComment(params.id, data));
    reset();
  };

  return (
    <>
      <Header />
      <div className={style.formBlock}>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <input
            placeholder="Имя"
            {...register("name", {
              required: "Поле обязательно",
            })}
          />
          {errors.name && (
            <div style={{ color: "red" }}>{errors.name.message}</div>
          )}
          <input
            placeholder="Email"
            {...register("email", {
              required: "Поле обязательно",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Введите корректный email",
              },
            })}
          />
          {errors.email && (
            <div style={{ color: "red" }}>{errors.email.message}</div>
          )}
          <textarea
            {...register("text", {
              required: "Поле обязательно",
            })}
          ></textarea>
          <button type="submit">Оправить</button>
        </form>
      </div>
    </>
  );
};
