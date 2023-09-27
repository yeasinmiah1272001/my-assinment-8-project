
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Header/Navbar/Navbar';

const LayOut = () => {
       return (
         <div className="w-screen-xl mx-auto px-8 md:px-16 lg:px-20 py-5 my-5">
           <Navbar></Navbar>
           <div className='my-10'>
             <Outlet></Outlet>
           </div>
         </div>
       );
};

export default LayOut;