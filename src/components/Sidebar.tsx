import { NavLink } from "react-router-dom";

const item =
  "block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-white hover:shadow-md hover:translate-x-0.5";
const active = "bg-white shadow-md text-neutral-900 border-l-2 border-neutral-900";
const inactive = "text-neutral-600 hover:text-neutral-900";

export default function Sidebar() {
  return (
    <nav className="sticky top-20 grid gap-1.5">
      <NavLink to="/" end className={({isActive}) => `${item} ${isActive ? active : inactive}`}>
        🏠 Overview
      </NavLink>
      <NavLink to="/data" className={({isActive}) => `${item} ${isActive ? active : inactive}`}>
        📊 Data
      </NavLink>
      <NavLink to="/interactive-results" className={({isActive}) => `${item} ${isActive ? active : inactive}`}>
        📈 Interactive Results
      </NavLink>
      <NavLink to="/living-meta-analysis" className={({isActive}) => `${item} ${isActive ? active : inactive}`}>
        🔄 Living Meta-Analysis
      </NavLink>
    </nav>
  );
}
