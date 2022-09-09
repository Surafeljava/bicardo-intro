import logo from '../../assets/logo/logo_light.png';

import { FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

function HomePage() {

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
            <img src={logo} alt="Logo" className="w-3/4 md:w-1/3"/>
            <br />
            <div className='flex text-red-400 text-lg md:text-2xl'>
                We are currently under construction!
            </div>
            <br />
            {/* <div className='flex text-white bg-slate-800 py-3 px-6 rounded-xl'>
                CONNECT WITH US!
            </div> */}
            <div className='flex justify-center gap-6 text-2xl text-yellow-100'>
                <a href="linkedin" className='hover:scale-110'><FiLinkedin className=''/></a>
                <a href="instagram" className='hover:scale-110'><FiInstagram className=''/></a>
                <a href="twitter" className='hover:scale-110'><FiTwitter className=''/></a>
            </div>
           
        </div>
    );
}

export default HomePage;