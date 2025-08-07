export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-sm text-foreground/60">
        <p>&copy; {year} Maninder Dev. All rights reserved.</p>
      </div>
    </footer>
  );
}