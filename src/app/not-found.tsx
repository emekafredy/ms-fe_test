import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl"> Sorry! There was a problem.</h2>
      <p className="leading-10 text-md">
        We could not find the page you were looking for.
      </p>
      <p className="mt-4">
        Go back to the
        <Link
          href="/revenue"
          className="ml-4 text-lg bg-primary-100 text-white px-6 py-2 rounded-full hover:bg-opacity-90"
        >
          Revenue Page
        </Link>
      </p>
    </div>
  );
}
