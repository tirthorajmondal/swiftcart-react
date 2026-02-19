import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const Root = () => {
    console.log(`${window.innerWidth} x ${window.innerHeight}`);

    return (
        <div className='flex flex-col bg-gray-100'>
            <Navbar />
            <div className="min-h-[calc(100vh-401px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;