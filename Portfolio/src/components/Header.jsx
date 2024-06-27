import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full py-4 bg-opacity-50 bg-black">
    <div className="container mx-auto flex justify-between items-center px-4">
      <h1 className="text-2xl font-bold transition-transform transform hover:scale-105 rounded-2xl">Team-1</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : undefined}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'underline' : undefined}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline' : undefined}>Contact Me</NavLink>
          </li>
          <li>
            <NavLink to="/style-guide" className={({ isActive }) => isActive ? 'underline' : undefined}>Style Guide</NavLink>
          </li>
          <li>
            <NavLink to="/get-theme" className={({ isActive }) => isActive ? 'underline' : undefined}>Get Theme</NavLink>
          </li>
        </ul>
      </nav>
      <a href="#" className="hover:underline">Search</a>
    </div>
  </header>
  );
}

export default Header;
