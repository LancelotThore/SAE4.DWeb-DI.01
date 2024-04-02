import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import { NavBar, NavBarDesktop } from '../ui/NavBar'
import Footer from '../ui/Footer';

export default function Root() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <section className='text-forground flex flex-col font-montserrat relative min-h-screen pb-[4rem]'>
      <div className='flex items-center'>
        {isSmallScreen ? <NavBar /> : <NavBarDesktop className="w-7 h-7 m-4 ml-7" />}
      </div>
      <Outlet />
    </section>
  );
}