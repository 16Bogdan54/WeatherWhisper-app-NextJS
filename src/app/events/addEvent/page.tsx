"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Label, Textarea, TextInput } from "flowbite-react";

interface EventFormInput {
  title: String;
  author: String;
  description: String;
}

export default async function AddEventPage() {
  const { register, handleSubmit } = useForm<EventFormInput>();
  const onSubmit: SubmitHandler<EventFormInput> = (data) =>
    console.log("event", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="mb-2 block">
          <Label className="text-white" htmlFor="title" value="Title" />
        </div>
        <TextInput
          {...register("title")}
          id="title"
          sizing="md"
          type="text"
          placeholder="Title"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-white" htmlFor="author" value="Author" />
        </div>
        <TextInput
          {...register("author")}
          id="author"
          sizing="md"
          type="text"
          placeholder="Author"
        />
      </div>
      <div className="max-w-md mb-4" id="textarea">
        <div className="mb-2 block">
          <Label
            className="text-white"
            htmlFor="description"
            value="Description"
          />
        </div>
        <Textarea
          {...register("description")}
          id="description"
          placeholder="Description"
          required
          rows={3}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
