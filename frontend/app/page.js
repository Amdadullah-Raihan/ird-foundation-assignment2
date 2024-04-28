import Link from "next/link";

export default function App() {
  return (
    <main className="flex ">
      <Link href="/books" className="text-blue-600 underline">
        {" "}
        Books{" "}
      </Link>
    </main>
  );
}
