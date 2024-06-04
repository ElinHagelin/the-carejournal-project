import type { Metadata } from "next";
import '@/styles/globals.css'


export const metadata: Metadata = {
  title: "CareJournal",
  description: "A journal app that allows you to create and share journals for personal use or to support the care of others.",
};

export default function RootLayout({
  children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {/* <nav>
          <a href="/">Hem</a> |
          <a href="/journals">Böcker</a>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
