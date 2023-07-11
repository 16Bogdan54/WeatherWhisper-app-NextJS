import { prisma } from "@/db";
import Link from "next/link";

export default async function Events() {
  const testData = {
    title: "test",
    description: "test description",
    organizer: "Bohdan Testovich",
    finished: false,
  };

  // await prisma.event.create({ data: testData });

  const events = await prisma.event.findMany();

  return (
    <>
      <h1 className="mb-2">Events</h1>
      <Link className="border px-4 py-2 border-cyan-50" href="/events/addEvent">
        Add new event
      </Link>
      <ul className="flex flex-wrap gap-5">
        {events.map((event, index) => (
          <li key={index} className="m-4 p-4 bg-cyan-600 text-cyan-200 min-w-[200px]">
            <h3>{event.title}</h3>
            <h4>{event.organizer}</h4>
            <p>{event.description}</p>
            <span>{event.finished}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
