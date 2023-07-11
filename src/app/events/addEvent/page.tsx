"use client";

import { useForm } from "react-hook-form";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { onSubmit } from "@/app/events/addEvent/submit";

export interface EventFormInput {
  title: string;
  description: string;
  organizer: string;
}

export default function AddEventPage() {
  const { register, handleSubmit } = useForm<EventFormInput>();

  return (
    <form action={handleSubmit(onSubmit)}>
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
          <Label className="text-white" htmlFor="author" value="Organizer" />
        </div>
        <TextInput
          {...register("organizer")}
          id="organizer"
          sizing="md"
          type="text"
          placeholder="Organizer"
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
