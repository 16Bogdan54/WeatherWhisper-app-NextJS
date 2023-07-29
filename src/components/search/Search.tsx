"use client";

import { TextInput, Button } from "flowbite-react";
import { FaLocationDot, FaSistrix } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  location: string;
}

const Search = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <form
        className="max-w-md flex items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          icon={FaLocationDot}
          placeholder="enter your location"
          type="text"
          {...register("location")}
        />
        {/*<Button type="submit">*/}
        {/*  <FaSistrix />*/}
        {/*</Button>*/}
      </form>
      <span>press enter to search</span>
    </>
  );
};

export default Search;
