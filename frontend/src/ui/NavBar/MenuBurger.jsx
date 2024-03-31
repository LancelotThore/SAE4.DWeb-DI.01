import React, { useState } from 'react';
import { Burger, Cross } from '../Icons';
import { Link } from 'react-router-dom';

function MenuBurger({ ...props }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className='relative flex'>
            <button onClick={toggleMenu}>
                {isOpen ? <Burger {...props} /> : <Burger {...props} />}
            </button>

            {isOpen && (
                <>
                    <div onClick={closeMenu} className='absolute h-screen w-screen z-20 -mt-2 bg-openNavBackground opacity-80'></div>
                    <nav className={`absolute h-screen min-w-80 bg-navBackground z-30 flex flex-col items-start justify-between -mt-2 py-16 px-20 transition-transform duration-1000 ease-in-out text-lg font-semibold ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                        <div>
                            <Cross onClick={toggleMenu} className="absolute w-7 pt-1.5 left-8 cursor-pointer" />
                            <Link to="/"><img className="w-24" src="/logo.webp" alt="Logo" /></Link>
                            <ul className='flex flex-col pt-14 gap-8'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/direct">Direct</Link></li>
                                <li><Link to="/catalogue">Catalogue</Link></li>
                                <li><Link to="/playlist">Playlist</Link></li>
                            </ul>
                        </div>
                        <ul className='flex flex-col gap-8'>
                            <li><Link to="settings">Paramètres</Link></li>
                            <li><Link to="support">Support</Link></li>
                        </ul>
                    </nav>
                </>
            )}
        </div>
    );
};

export default MenuBurger;