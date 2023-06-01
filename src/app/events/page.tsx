import { prisma } from "@/db";

export default async function Events() {
  // const testData = {
  //   title: "test",
  //   description: "test description",
  //   organizer: "Bohdan Testovich",
  //   finished: false,
  // };
  //
  // await prisma.event.create({ data: testData });

  const events = await prisma.event.findMany();

  return (
    <>
      <h1>Events</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="m-4 p-4">
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
