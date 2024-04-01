import { Link, NavLink } from 'react-router-dom';
import { HomeButton, DirectButton, Catalogue, Search, Other } from '../Icons';
import MenuBurger from './MenuBurger';

function NavBar() {
  const base = "flex flex-col items-center gap-0.5";
  const text = "text-xs";
  const icon = "h-6";

  const classActive = ({ isActive }) =>
    isActive ? `text-forground ${base}` : `text-textNav ${base}`;

  return (
    <>
      <Link to="/"><img className="w-24 absolute top-0 m-4" src="/logo.webp" alt="" /></Link>

      <nav className='flex justify-around fixed bottom-0 p-3 w-screen bg-navBackground z-40'>
        
        <NavLink className={classActive} to="/">
          <HomeButton className={icon} />
          <p className={text}>Home</p>
        </NavLink>

        <NavLink className={classActive} to="/direct">
          <DirectButton className={icon} />
          <p className={text}>Direct</p>
        </NavLink>

        <NavLink className={classActive} to="/catalogue">
          <Catalogue className={icon} />
          <p className={text}>Catalogue</p>
        </NavLink>

        <NavLink className={classActive} to="/search">
          <Search className={icon} />
          <p className={text}>Search</p>
        </NavLink>

        <NavLink className={classActive} to="/other">
          <Other className={icon} />
          <p className={text}>Other</p>
        </NavLink>
      </nav>
    </>
  );
}

function NavBarDesktop({ ...props }) {
  return (
    <div className='flex items-center h-[4.5rem] z-40 fixed top-0'>
      <MenuBurger {...props} />
      <Link to="/"><img className="w-24 z-10 m-4" src="/logo.webp" alt="" /></Link>
    </div>
  )
}

export { NavBar, NavBarDesktop };