import { Link, Outlet } from 'react-router-dom';
import NavBar from '../ui/NavBar'
import Card from '../ui/List/Card';
import Header from '../ui/Header';
import List from '../ui/List';

export default function Root() {

  return (
    <>
      <section className='bg-background text-forground w-screen h-screen flex font-montserrat relative'>
        <Link to="/"><img className="w-24 absolute z-10 m-4" src="/logo.webp" alt="" /></Link>
        <NavBar />
        <Header />
        <Outlet />
      </section>
    </>
  );
}