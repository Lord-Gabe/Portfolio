import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/affiliates", label: "Affiliates" },
    { path: "/donate", label: "Donate" },
  ];

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">MyPortfolio</h1>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700 hover:text-indigo-500"
                } transition`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
