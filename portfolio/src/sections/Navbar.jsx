import React from 'react';
import { useState } from 'react';
import { navLinks } from '../constants';

const NavItems = () => {
    return (
        <ul className='nav-ul'>
            {
                navLinks.map(({ id, name, href }) => (
                    <li key={id} className='nav-li'>
                        <a href={href} className='nav-li-a'> {name}</a>
                    </li>
                ))
            }
        </ul>
    );
}

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    }

    return (
        <div className='fixed top-0 left-0 right-0 z-50 bg-transparent text-white hover:border-b-2 border-teal-300'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                    <div className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
                        <img src="assets/icon.png" alt="logo" className='' />
                    </div>

                    <button onClick={toggleMenu} className="text-black hover:text-teal-300 focus:outline-none sm:hidden flex hover:border-b-1 border-teal-300" aria-label='Toggle Menu'>
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-6 h-6' />
                    </button>

                    <nav className='sm:flex hidden'>
                        <NavItems />
                    </nav>

                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className='p-5'>
                    <NavItems />
                </nav>
            </div>
        </div>
    )
}

export default NavBar