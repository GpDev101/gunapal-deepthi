export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-maroon/70">
      <div className="max-w-3xl mx-auto">
        <div className="mb-2">Made with love by Gunapal & Deepthi</div>
        <div className="text-xs">© {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}
