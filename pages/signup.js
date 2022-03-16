import React from "react";
import Link from "next/link";
import signupValidation from "../YupValidationSchema/signupValidation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import template from "../utils/template";
import AuthBanner from "../components/AuthBanner";
import CountrySelection from "../components/CountrySelection";

export default function SignUp() {
  // gère les erreur des notre formulaire
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupValidation),
  });

  // fonction qui envoit la data au backend
  const handleSignup = async (input) => {
    const newUserData = {
      email: input.email,
      password: input.password,
      firstname: input.firstname,
      lastname: input.lastname,
      country: input.country,
      zip: input.zip,
    };
    const req = await axios.post(`${template}api/signup`, newUserData);
  };

  return (
    <div className="w-screen h-screen p-5 max-w-[1000px] lg:mx-auto lg:flex lg:items-center lg:justify-between">
      {/* Auth Banner */}
      <AuthBanner />
      {/* Form Title */}
      <div className="lg:mb-auto lg:mt-10">
        <h2 className="text-center font-bold text-2xl mb-4 lg:text-left">
          Sign Up
        </h2>
        <p className="text-center lg:text-left">
          Already have a Ticketmaster account?{" "}
          <span className="font-bold text-blue-600">
            <Link href="/signup">Sign In</Link>
          </span>{" "}
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="mt-2 flex flex-col gap-y-3 max-w-[500px] mx-auto"
        >
          <div>
            <label>Email Address</label>
            <Controller
              control={control}
              name="email"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <div>
                  <input
                    type="email"
                    value={value || ""}
                    className="border border-gray-400 p-2 w-full outline-0 rounded focus:border-blue-600"
                    onChange={onChange}
                  />
                  {/* si il y a une erreur dans le champs, on affiche le message correspondant à l'erreur */}
                  {!!error && (
                    <p className="text-red-500 text-xs">{error?.message}</p>
                  )}
                </div>
              )}
            />
          </div>
          <div>
            <label>Password</label>
            <Controller
              control={control}
              name="password"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <div>
                  <input
                    type="password"
                    value={value || ""}
                    className="border border-gray-400 p-2 w-full outline-0 rounded focus:border-blue-600"
                    onChange={onChange}
                  />
                  {/* si il y a une erreur dans le champs, on affiche le message correspondant à l'erreur */}
                  {!!error && (
                    <p className="text-red-500 text-xs">{error?.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="w-full flex justify-between items-center gap-x-8">
            <div className="flex-1">
              <label>First Name</label>
              <Controller
                control={control}
                name="firstname"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <div>
                    <input
                      type="text"
                      value={value || ""}
                      className="border border-gray-400 p-2 w-full outline-0 rounded focus:border-blue-600"
                      onChange={onChange}
                    />
                    {/* si il y a une erreur dans le champs, on affiche le message correspondant à l'erreur */}
                    {!!error && (
                      <p className="text-red-500 text-xs">{error?.message}</p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="flex-1">
              <label>Last Name</label>
              <Controller
                control={control}
                name="lastname"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <div>
                    <input
                      type="text"
                      value={value || ""}
                      className="border border-gray-400 p-2 w-full outline-0 rounded focus:border-blue-600"
                      onChange={onChange}
                    />
                    {/* si il y a une erreur dans le champs, on affiche le message correspondant à l'erreur */}
                    {!!error && (
                      <p className="text-red-500 text-xs">{error?.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>

          <div className="w-full flex justify-between items-center gap-x-8">
            <div className="flex-1">
              <label>Country of Residence</label>
              <Controller
                control={control}
                name="country"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <div>
                    <CountrySelection onChange={onChange} value={value} />
                    {/* si il y a une erreur dans le champs, on affiche le message correspondant à l'erreur */}
                    {!!error && (
                      <p className="text-red-500 text-xs">{error?.message}</p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="flex-1">
              <label>Zip/Postal Code</label>
              <Controller
                control={control}
                name="zip"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <div>
                    <input
                      type="text"
                      value={value || ""}
                      className="border border-gray-400 p-2 w-full outline-0 rounded focus:border-blue-600"
                      onChange={onChange}
                    />
                    {/* si il y a une erreur dans le champs, on affiche le message correspondant à l'erreur */}
                    {!!error && (
                      <p className="text-red-500 text-xs">{error?.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>

          <p className="text-xs text-gray-500">
            By continuing pass this page, you agree to the{" "}
            <span className="font-bold text-blue-600 cursor-pointer">
              Terms of Use
            </span>{" "}
            and understand that information will be used as described in our{" "}
            <span className="font-bold text-blue-600 cursor-pointer">
              Privacy Policy.
            </span>
          </p>
          <button
            type="submit"
            className="ml-auto px-3 py-2 bg-blue-600 rounded text-white hover:bg-blue-700"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
