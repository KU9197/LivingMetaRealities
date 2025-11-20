import { NavLink } from 'react-router-dom';

const navItem =
  "rounded-xl px-6 py-3 text-base font-medium transition-all duration-200 text-center shadow-lg hover:shadow-xl w-56";
const active = "bg-black text-white shadow-xl";
const inactive = "bg-white text-black";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap gap-4 justify-center items-stretch">
      <NavLink 
        to="/" 
        end 
        className={({isActive}) => `${navItem} ${isActive ? active : inactive}`}
      >
        Overview
      </NavLink>
      <NavLink 
        to="/data" 
        className={({isActive}) => `${navItem} ${isActive ? active : inactive}`}
      >
        Data
      </NavLink>
      <NavLink 
        to="/interactive-results" 
        className={({isActive}) => `${navItem} ${isActive ? active : inactive}`}
      >
        Interactive Results
      </NavLink>
      <NavLink 
        to="/living-meta-analysis" 
        className={({isActive}) => `${navItem} ${isActive ? active : inactive}`}
      >
        Living Meta-Analysis
      </NavLink>
    </nav>
  );
}
