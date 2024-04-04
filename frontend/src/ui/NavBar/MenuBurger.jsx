import React, { useState } from 'react';
import { Burger, Cross } from '../Icons';
import { NavLink, Link } from 'react-router-dom';

function MenuBurger({ ...props }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const classActive = ({ isActive }) =>
    isActive ? `text-textNav` : `text-forground hover:text-textNav`;

    return (
        <div className='relative flex h-full'>
            <button onClick={toggleMenu}>
                {isOpen ? <Burger {...props} /> : <Burger {...props} />}
            </button>

            {isOpen && (
                <>
                    <div onClick={closeMenu} className='absolute h-screen w-screen z-20 bg-openNavBackground opacity-80 cursor-cross'></div>
                    <nav className={`fixed left-0 h-screen min-w-80 bg-navBackground z-30 flex flex-col items-start justify-between py-16 px-20 transition-transform duration-1000 ease-in-out text-lg font-semibold ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                        <div>
                            <Cross onClick={toggleMenu} className="absolute w-7 pt-1.5 left-8 cursor-pointer" />
                            <Link to="/"><img className="w-24" src="/logo.webp" alt="Logo" /></Link>
                            <ul className='flex flex-col pt-14 gap-8'>
                                <li><NavLink className={classActive}  to="/">Home</NavLink></li>
                                <li><NavLink className={classActive} to="/direct">Direct</NavLink></li>
                                <li><NavLink className={classActive} to="/catalogue">Catalogue</NavLink></li>
                                <li><NavLink className={classActive} to="/playlist">Playlist</NavLink></li>
                            </ul>
                        </div>
                        <ul className='flex flex-col gap-8'>
                            <li><NavLink className={classActive} to="settings">Paramètres</NavLink></li>
                            <li><NavLink className={classActive} to="support">Support</NavLink></li>
                        </ul>
                    </nav>
                </>
            )}
        </div>
    );
};

export default MenuBurger;