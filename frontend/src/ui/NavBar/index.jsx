import { NavLink } from 'react-router-dom';
import { HomeButton, DirectButton, Catalogue, Search, Other } from '../../components/Icons';


export default function NavBar() {

  const text = "text-xs";
  const icon = "h-6";

  const classActive = ({ isActive }) =>
    isActive ? "text-forground flex flex-col items-center gap-0.5" : "text-textNav flex flex-col items-center gap-0.5"

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
        <p className={text}>Seach</p>
      </NavLink>

      <NavLink className={classActive} to="/other">
        <Other className={icon}/>
        <p className={text}>Other</p>
      </NavLink>
    </nav>
  );

}