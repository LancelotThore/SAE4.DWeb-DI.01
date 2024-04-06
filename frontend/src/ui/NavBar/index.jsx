import { Link, NavLink } from 'react-router-dom';
import { HomeButton, DirectButton, Catalogue, Search, Other } from '../Icons';
import MenuBurger from './MenuBurger';
import Button from '../Button';

function NavBar() {
  const base = "flex flex-col items-center gap-0.5";
  const text = "text-xs";
  const icon = "h-6";

  const classActive = ({ isActive }) =>
    isActive ? `text-forground ${base}` : `text-textNav ${base}`;

  return (
    <>
      <Link to="/"><img className="w-24 absolute top-0 m-4 z-40" src="/logo.webp" alt="" /></Link>

      <nav className='flex justify-around fixed bottom-0 p-3 w-screen bg-navBackground z-40'>

        <NavLink className={classActive} to="/">
          <HomeButton className={icon} />
          <p className={text}>Accueil</p>
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
          <p className={text}>Recherche</p>
        </NavLink>

        <NavLink className={classActive} to="/other">
          <Other className={icon} />
          <p className={text}>Autre</p>
        </NavLink>
      </nav>
    </>
  );
}

function NavBarDesktop({ user, ...props }) {

  const handleLogin = () => {
    window.location.href = 'http://193.168.145.123:8080/login';
  }

  const handleRegister = () => {
    window.location.href = 'http://193.168.145.123:8080/register';
  }

  return (
    <div className='flex items-center h-[4.5rem] z-40 fixed top-0 w-full relative'>
      <MenuBurger {...props} />
      <Link to="/"><img className="w-24 z-10 m-4" src="/logo.webp" alt="" /></Link>
      <div className='flex absolute right-4 items-center justify-center gap-5 z-40'>
        <Link to="/search"><Search className="w-8" /></Link>
        {user && user.image ? (
          <Link to="/other" className='mr-2'><img className='rounded-md h-11 w-11' src={`/profils/${user.image}`} alt="" /></Link>
        ) : (
          <>
            <Button intent="connexionBtn" size="small" onClick={handleLogin}>Connexion</Button>
            <Button intent="inscriptionBtn" size="small" onClick={handleRegister}>S'inscrire</Button>
          </>
        )}
      </div>
    </div>
  )
}

export { NavBar, NavBarDesktop };