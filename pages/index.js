import Center from "../components/Center";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-y-auto">
      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Center */}
        <Center />
      </main>

      <div>
        {/* Player */}
      </div>
    </div>
  )
}
