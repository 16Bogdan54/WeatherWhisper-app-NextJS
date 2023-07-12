"use server"
import {prisma} from "@/db";

export const updateEventStatus = async (id: string, finished: boolean) => {
    await prisma.event.update({where: {id}, data: {finished}})
}