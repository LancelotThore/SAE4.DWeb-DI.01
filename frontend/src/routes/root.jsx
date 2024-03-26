import { Outlet } from 'react-router-dom';
import NavBar from '../ui/NavBar'
import Card from '../components/Card';
import Header from '../components/Header';

export default function Root() {

  return (
    <>
      <section className='bg-background text-forground w-screen h-screen flex'>
        <NavBar />
        <Card />
      </section>
    </>
  );
}