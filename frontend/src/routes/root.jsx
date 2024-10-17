import { useMediaQuery } from 'react-responsive';
import { Outlet, useLoaderData } from 'react-router-dom';
import { NavBar, NavBarDesktop } from '../ui/NavBar'
import { fetchUser } from '../lib/loaders';

export async function loader() {
  return await fetchUser();
}

export default function Root() {
  const user = useLoaderData();

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <section className='text-forground flex flex-col font-montserrat relative min-h-screen pb-20 sm:pb-8'>
      <div className='flex items-center'>
        {isSmallScreen ? <NavBar /> : <NavBarDesktop user={user} className="w-7 h-7 m-4 ml-7" />}
      </div>
      <Outlet />
    </section>
  );
}