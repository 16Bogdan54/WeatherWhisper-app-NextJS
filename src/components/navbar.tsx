import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6">
      <Link href="/">
        <h1 className="text-2xl font-bold">Event Genie</h1>
      </Link>
      <ul className="flex items-center">
        <li>
          <Link
            className="p-3 hover:bg-cyan-800 focus:bg-cyan-800"
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="p-3 hover:bg-cyan-800 focus:bg-cyan-800"
            href="/events"
          >
            Events
          </Link>
        </li>
      </ul>
    </nav>
  );
}
