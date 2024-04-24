import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <main className="flex ">
      <Sidebar />
      <div className="w-full  p-4 rounded-l-2xl bg-blue-50 h-[90vh]">
        <Home />
      </div>
    </main>
  );
}
