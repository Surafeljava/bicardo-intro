import logo from '../../assets/logo/logo_light.png';


import { FiLinkedin, FiInstagram, FiTwitter, FiCreditCard, FiTwitch, FiFeather } from "react-icons/fi";

function HomePage() {

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
            <div className="grow"></div>
            <img src={logo} alt="Logo" className="w-3/4 md:w-1/4"/>
            <br />
            <div className='flex text-red-400 text-xl md:text-3xl'>
                COOMING SOON!
            </div>

            <div className="flex gap-6">
                <a href='#1' className="w-14 h-14 md:w-20 md:h-20 rounded-lg bg-yellow-100 flex justify-center items-center text-3xl hover:scale-110 duration-200">
                    <FiCreditCard className=''/>
                </a>
                <a href='#2' className="w-14 h-14 md:w-20 md:h-20 rounded-lg bg-yellow-100 flex justify-center items-center text-3xl hover:scale-110 duration-200">
                    <FiTwitch className=''/>
                </a>
                <a href='#3' className="w-14 h-14 md:w-20 md:h-20 rounded-lg bg-yellow-100 flex justify-center items-center text-3xl hover:scale-110 duration-200">
                    <FiFeather className=''/>
                </a>
            </div>

            <br />
            <div className='flex text-white bg-slate-800 py-3 px-6 rounded-xl'>
                CONNECT WITH US!
            </div>
            <div className='grow flex justify-center gap-6 text-2xl text-yellow-100 h-full'>
                <div className="flex flex-col">
                    <a href="linkedin" className='bg-zinc-600 hover:bg-white hover:text-zinc-900 p-2 h-10 hover:h-1/2 duration-200'><FiLinkedin className=''/></a>
                </div>
                <div className="flex flex-col">
                    <a href="linkedin" className='bg-zinc-600 hover:bg-white hover:text-zinc-900 p-2 h-10 hover:h-1/2 duration-200'><FiInstagram className=''/></a>
                </div>
                <div className="flex flex-col">
                    <a href="linkedin" className='bg-zinc-600 hover:bg-white hover:text-zinc-900 p-2 h-10 hover:h-1/2 duration-200'><FiTwitter className=''/></a>
                </div>
                
            </div>
           
        </div>
    );
}

export default HomePage;