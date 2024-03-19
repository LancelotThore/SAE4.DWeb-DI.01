import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HomeButton, DirectButton, Catalogue, Search, Other } from '../../components/Icons';


export default function NavBar() {

  const base = "flex flex-col items-center gap-0.5";
  const text = "text-xs text-textNav";
  const icon = "h-6";

  const [color, setColor] = useState(false);
  let handler = function () {
    setColor(!color);
  }

  return (
    <nav className='flex justify-around absolute bottom-0 p-3 w-screen bg-navBackground'>
      <Link onClick={handler} className={base} to="/">
        <HomeButton className={icon} color={color}/>
        <p className={text}>Home</p>
      </Link>

      <Link onClick={handler} className={base} to="/direct">
        <DirectButton className={icon} color={color}/>
        <p className={text}>Direct</p>
      </Link>

      <Link onClick={handler} className={base} to="/catalogue">
        <Catalogue className={icon} color={color}/>
        <p className={text}>Catalogue</p>
      </Link>

      <Link onClick={handler} className={base} to="/search">
        <Search className={icon} color={color}/>
        <p className={text}>Seach</p>
      </Link>

      <Link onClick={handler} className={base} to="/other">
        <Other className={icon} color={color}/>
        <p className={text}>Other</p>
      </Link>
    </nav>
  );

}