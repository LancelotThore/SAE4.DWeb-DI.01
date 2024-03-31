import { useMediaQuery } from 'react-responsive';
import { Link, Outlet } from 'react-router-dom';
import { NavBar, NavBarDesktop } from '../ui/NavBar'
import Card from '../ui/List/Card';
import Header from '../ui/Header';
import List from '../ui/List';

export default function Root() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 650px)' });

  return (
    <>
      <section className='bg-background text-forground w-screen h-screen flex flex-col font-montserrat relative'>
        <div className='flex items-center'>
          {isSmallScreen ? <NavBar className="text-forground hover:text-border w-7 h-7 m-4"/> : <NavBarDesktop className="text-forground hover:text-border w-7 h-7 m-4"/>}
        </div>
        <Outlet />
      </section>
    </>
  );
}