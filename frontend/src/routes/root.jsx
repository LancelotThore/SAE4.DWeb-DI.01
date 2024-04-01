import { useMediaQuery } from 'react-responsive';
import { Link, Outlet } from 'react-router-dom';
import { NavBar, NavBarDesktop } from '../ui/NavBar'
import Card from '../ui/List/Card';
import Header from '../ui/Header';
import List from '../ui/List';

export default function Root() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <>
      <section className='text-forground flex flex-col font-montserrat relative'>
        <div className='flex items-center'>
          {isSmallScreen ? <NavBar /> : <NavBarDesktop className="w-7 h-7 m-4"/>}
        </div>
        <Outlet />
      </section>
    </>
  );
}