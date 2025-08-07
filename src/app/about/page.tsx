import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Maninder Dev",
  description: "Learn more about this site",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">About</h1>
      <p className="mt-4 text-foreground/80">
        This site is built with Next.js 15, React 19, and Tailwind CSS 4. It
        serves as a minimal personal site scaffold with a shared header and
        semantic pages.
      </p>
    </main>
  );
}