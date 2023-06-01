import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Genie",
  description: "Event management app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-cyan-900 text-cyan-100 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow container mx-auto">{children}</main>
        <footer className="flex justify-center items-center p-5 bg-cyan-700 text-cyan-200">
          <h1>Event Genie all rights reserved</h1>
        </footer>
      </body>
    </html>
  );
}
