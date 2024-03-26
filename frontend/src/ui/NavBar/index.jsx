import { NavLink } from 'react-router-dom';
import { HomeButton, DirectButton, Catalogue, Search, Other } from '../Icons';

export default function NavBar() {
  const base = "flex flex-col items-center gap-0.5";
  const text = "text-xs";
  const icon = "h-6";

  const classActive = ({ isActive }) =>
    isActive ? `text-forground ${base}` : `text-textNav ${base}`;

  return (
    <nav className='flex justify-around absolute bottom-0 p-3 w-screen bg-navBackground'>
      <NavLink className={classActive} to="/">
        <HomeButton className={icon}/>
        <p className={text}>Home</p>
      </NavLink>

      <NavLink className={classActive} to="/direct">
        <DirectButton className={icon}/>
        <p className={text}>Direct</p>
      </NavLink>

      <NavLink className={classActive} to="/catalogue">
        <Catalogue className={icon}/>
        <p className={text}>Catalogue</p>
      </NavLink>

      <NavLink className={classActive} to="/search">
        <Search className={icon}/>
        <p className={text}>Search</p> {/* Corrected typo */}
      </NavLink>

      <NavLink className={classActive} to="/other">
        <Other className={icon}/>
        <p className={text}>Other</p>
      </NavLink>
    </nav>
  );
}