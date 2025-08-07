import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Maninder Dev",
  description: "Welcome to Maninder Dev",
};

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold">Home Page</h1>
    </main>
  );
}
