"use server";

import { SubmitHandler } from "react-hook-form";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
import { EventFormInput } from "@/app/events/addEvent/page";

export const onSubmit: SubmitHandler<EventFormInput> = async (data) => {
  await prisma.event.create({ data: { ...data, finished: false } });
  redirect("/events");
};
