import Link from "next/link";

export default function Sidenav({ isSidenavOpen}) {
  return (
    <div className="relative min-h-screen">
      <div
        className={`${
          isSidenavOpen ? "w-[200px]" : "w-0"
        } bg-gray-200 overflow-hidden transition-all duration-300 fixed top-0 left-0 bottom-0 z-10 h-screen`}
      >
        <div className="p-4 mt-14">
          <ul>
            <li className="h-8 flex items-center hover:bg-gray-300 cursor-pointer"><Link href="/dashboard">Home</Link></li>
            <li className="h-8 flex items-center hover:bg-gray-300 cursor-pointer"><Link href="/personal">Personal</Link></li>
            <li className="h-8 flex items-center hover:bg-gray-300 cursor-pointer">Groups</li>
            <li className="h-8 flex items-center hover:bg-gray-300 cursor-pointer">Analytics</li>
            <li className="h-8 flex items-center hover:bg-gray-300 cursor-pointer">Payments</li>
            <li className="h-8 flex items-center hover:bg-gray-300 cursor-pointer">Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
