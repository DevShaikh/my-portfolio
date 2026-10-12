export default function NotFound() {
  return (
    <div className="mx-auto max-w-page px-5 py-28">
      <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted">That page does not exist.</p>
      <a
        className="mt-6 inline-block font-medium text-accent underline underline-offset-4"
        href="/"
      >
        Back to the home page
      </a>
    </div>
  );
}
