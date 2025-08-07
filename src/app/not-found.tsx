import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-foreground/70">
        The page you are looking for does not exist.
      </p>
      <p className="mt-4">
        <Link className="underline hover:no-underline" href="/">
          Go back home
        </Link>
      </p>
    </main>
  );
}