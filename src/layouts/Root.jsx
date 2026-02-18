import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const Root = () => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className="min-h-[calc(100vh-304px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;