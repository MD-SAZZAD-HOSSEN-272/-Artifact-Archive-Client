import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Pages/Footer';
import { AuthContext } from '../Contexts/AuthContext';

const HomeLayout = () => {

    const {DarkMode} = useContext(AuthContext)
    
    return (
        <div className={`${DarkMode ? 'bg-[#0f172a]' : 'bg-gradient-to-br from-[#2e1f0e] via-[#3c2c1a] to-[#6e4f2a]'} pb-10 pt-28 text-white`}>
            <div >
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='w-10/12 mx-auto min-h-screen'>
                <Outlet></Outlet>
            </main>
            <footer className='w-10/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
        </div>
    );
};

export default HomeLayout;