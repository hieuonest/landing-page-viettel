"use client";
import React from "react";
import { Button } from "../ui/button";
import { roboto, sarabun } from "@/lib/font";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  phone: string;
};
function FormContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { name, email, phone } = data;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      return null;
    }
    const mailtoLink = `mailto:viettelcx.com.vn?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}`;
    window.location.href = mailtoLink;
  };

  return (
    <form
      className={`flex items-center justify-center flex-col xs:flex-row w-[100dvw] md:w-full gap-5 xs:gap-2 [&>div]:min-h-10 ${roboto.className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative max-xs:min-w-[80%] min-[1600px]:min-w-[267px] flex justify-center">
        <input
          {...register("name", { required: true })}
          type="text"
          id="name"
          name="name"
          placeholder="Họ và tên"
          className="text-white h-10 px-4 w-full rounded-sm bg-transparent border border-[#858585] border-solid placeholder:text-[#858585] outline-none focus:border-[rgb(203,202,202)] focus:border-1  transition-all duration-300 ease-in-out"
        />
        {errors.name ? (
          <div className="absolute bottom-0 translate-y-full text-[#EB6363] italic text-[13px]">
            Họ và tên không được để trống
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="relative max-xs:min-w-[80%] min-[1600px]:min-w-[267px] flex justify-center">
        <input
          {...register("email", { required: true })}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="text-white h-10 px-4 w-full rounded-sm bg-transparent border border-[#858585] border-solid placeholder:text-[#858585] outline-none focus:border-[rgb(203,202,202)] focus:border-1  transition-all duration-300 ease-in-out"
        />
        {errors.email ? (
          <div className="absolute bottom-0 translate-y-full text-[#EB6363] italic text-[13px]">
            Email không được để trống
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="relative max-xs:min-w-[80%] min-[1600px]:min-w-[267px] flex justify-center">
        <input
          {...register("phone", { required: true })}
          type="tel"
          id="phone"
          name="phone"
          placeholder="Số điện thoại"
          onKeyDown={(e) => {
            if (!/[0-9+]/.test(e.key) && e.key !== "Backspace") {
              e.preventDefault();
            }
          }}
          className="text-white h-10 px-4 w-full rounded-sm bg-transparent border border-[#858585] border-solid placeholder:text-[#858585] outline-none focus:border-[rgb(203,202,202)] focus:border-1 transition-all duration-300 ease-in-out"
        />

        {errors.phone ? (
          <div className="absolute bottom-0 translate-y-full text-[#EB6363] italic text-[13px]">
            Số điện thoại không được để trống
          </div>
        ) : (
          ""
        )}
      </div>

      <Button
        type="submit"
        className={`h-10 max-xs:mt-3 px-8 min-[1400px]:px-16 bg-white uppercase text-[#EA0033] !font-bold ${sarabun.className} text-sm md:text-lg hover:bg-white`}
      >
        Liên hệ
      </Button>
    </form>
  );
}

export default FormContact;
