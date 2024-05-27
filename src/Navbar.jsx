import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <>
        <nav className="flex px-32 pt-10 pb-5 items-center">
            <img src="https://unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png" alt="logo" width='120px' />
            <div className="flex ml-auto gap-8 relative">
                <img src="https://unfluke.in/static/media/bell-icon.d99e8edc.png" alt="bell" style={{height:'25px'}} />
                <img src="https://unfluke.in/static/media/coin.9bfaef7e.jpeg" alt="bell" style={{height:'25px'}} />
                <img src="https://unfluke.in/static/media/monkey.5456259d.jpg" alt="bell" style={{height:'25px'}} />
                <MdKeyboardArrowDown onBlur={() =>  setDropdown(prev => !prev)} onMouseEnter={() => setDropdown(prev => !prev)}/>
                <div className={dropdown ?"absolute top-12 bg-white w-[12em] flex flex-col gap-2 border p-2 pr-4" : 'hidden'}>
                    <p className="hover:bg-gray-200 p-2 rounded-md text-gray-600 text-md">My Profile</p>
                    <p className="hover:bg-gray-200 p-2 rounded-md text-gray-600 text-md">My Earning</p>
                    <p className="hover:bg-gray-200 p-2 rounded-md text-gray-600 text-md">Funding</p>
                    <p className="hover:bg-gray-200 p-2 rounded-md text-gray-600 text-md">Change Password</p>
                    <p className="hover:bg-gray-200 p-2 rounded-md text-red-600 text-md">Logout</p>
                </div>
            </div>
        </nav>
    <div className="border-b w-full"></div>
    <div className="flex gap-6 font-semibold px-40 p-4">
        <p>LeaderBoard</p>
        <p>Historical Trading</p>
        <p>Historical Chart</p>
        <p>Scanners</p>
        <p>Alerts</p>
        <p>Basic Backtest</p>
        <p>Advanced Backtest</p>
        <p>Pricing</p>
        <p>My Earnings</p>
    </div>
    </>
  );
}

export default Navbar;
