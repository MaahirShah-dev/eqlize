import { FaBars } from "react-icons/fa";

export default function Topnav({ toggleSidenav }) {
  return (
    <div className="fixed top-0 left-0 z-[100] bg-transparent h-[4rem] w-screen flex items-center justify-center">
      {/* Button to toggle sidenav */}
      <button
        onClick={toggleSidenav}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white text-primary p-2 shadow-lg hover:bg-gray-200"
      >
        <FaBars size={20} />
      </button>
    </div>
  );
}
