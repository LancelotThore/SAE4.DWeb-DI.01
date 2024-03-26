import { Outlet } from 'react-router-dom';
import NavBar from '../ui/NavBar'
import Card from '../ui/List/Card';
import Header from '../ui/Header';
import List from '../ui/List';

export default function Root() {

  return (
    <>
      <section className='bg-background text-forground w-screen h-screen flex'>
        <NavBar />
        <List />
      </section>
    </>
  );
}