import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen select-none flex-col items-center justify-center gap-y-4 p-24">
      <h1 className="text-xl sm:text-2xl lg:text-4xl">Cake List App</h1>
      <Link
        href={"/cakes"}
        className="rounded-md bg-sky-500 px-4 py-2 text-white"
      >
        Get Started
      </Link>
    </main>
  );
}
