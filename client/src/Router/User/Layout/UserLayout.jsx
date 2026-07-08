
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';


const UserLayout = () => {
   const darkMode = useSelector((state) => state.mainSlice.darkMode);

   useEffect(() => {
      document.documentElement.classList.toggle('dark', darkMode);
      localStorage.setItem('darkMode', darkMode);
   }, [darkMode]);

   return (
      <div>
            <header> 
               <Navbar />
            </header>

            <main className='mt-14 sm:mt-16'>
               <Outlet />
            </main>
            <footer> 
               <Footer />
            </footer>
      </div>
   );
}

export default UserLayout;
