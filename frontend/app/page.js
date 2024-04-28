import Link from "next/link";
import Home from "./components/home/Home";

export default function App() {
  return (
    <main className="flex ">
      <Link href="/books"> Books </Link>
    </main>
  );
}
