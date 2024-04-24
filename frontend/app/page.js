import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <main className="flex ">
      <Sidebar />
      <div className="w-full h-full px-4 rounded-l-2xl bg-blue-50"> Home</div>
    </main>
  );
}
