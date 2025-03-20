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
    formState: { },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { name, email, phone } = data;
    const mailtoLink = `mailto:viettelcx.com.vn?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
      <form
        className={`flex items-center justify-center w-[100dvw] md:w-full gap-2 [&>div]:min-h-10 ${roboto.className}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("name")}
          type="text"
          id="name"
          name="name"
          placeholder="Họ và tên"
          className="text-white h-10 px-4 max-md:min-w-[87%] min-w-[267px] max-[1524px]:min-w-[227px] rounded-sm bg-transparent border border-[#858585] border-solid placeholder:text-[#858585] outline-none focus:border-[rgb(203,202,202)] focus:border-1  transition-all duration-300 ease-in-out"
        />
        <div>
          <input
            {...register("email")}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="text-white h-10 px-4 max-md:min-w-[50%] min-w-[267px] max-[1524px]:min-w-[227px] rounded-sm bg-transparent border border-[#858585] border-solid placeholder:text-[#858585] outline-none focus:border-[rgb(203,202,202)] focus:border-1  transition-all duration-300 ease-in-out"
          />
        </div>
        <div>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Số điện thoại"
            className="text-white h-10 px-4 max-md:min-w-[50%] min-w-[267px] max-[1524px]:min-w-[227px] rounded-sm bg-transparent border border-[#858585] border-solid placeholder:text-[#858585] outline-none focus:border-[rgb(203,202,202)] focus:border-1  transition-all duration-300 ease-in-out"
          />
        </div>

        <Button
          type="submit"
          className={`h-10 px-10 md:px-16 bg-white uppercase text-[#EA0033] !font-bold ${sarabun.className} text-sm md:text-lg hover:bg-white`}
        >
          Liên hệ
        </Button>
      </form>
    </>
  );
}

export default FormContact;
