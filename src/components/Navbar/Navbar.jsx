import { Link } from "react-router-dom";
import { EnvelopeIcon, PhoneIcon, } from '@heroicons/react/24/solid'

const Navbar = () => {
    const navbarItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li>
            <details>
                <summary><Link to='/services'>Services</Link></summary>
                <ul className="p-2 w-40">
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                    <li><Link>Submenu 2</Link></li>
                    <li><Link>Submenu 2</Link></li>
                    <li><Link>Submenu 2</Link></li>
                    <li><Link>Submenu 2</Link></li>
                    <li><Link>Submenu 2</Link></li>
                    <li><Link>Submenu 2</Link></li>
                    <li><Link>Submenu 2</Link></li>
                    <li><Link>Submenu 2</Link></li>
                    <li><Link>Submenu 2</Link></li>
                    <li><Link>Submenu 2</Link></li>
                </ul>
            </details>
        </li>
        <li><Link to='/contact'>Contact</Link></li>

    </>

    return (
        <div className="navbar text-[#800000] ">
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-58">
                    {
                        navbarItem
                    }
                    <div className="bg-[#800000] text-white rounded-xl">
                        <li ><Link><PhoneIcon className="h-4 w-4" />+968-99364737</Link></li>
                        <li ><Link><EnvelopeIcon className="h-4 w-4" />sales@primeprintingpress.com</Link></li>
                    </div>
                </ul>
            </div>
            <div className="navbar-start">

                <Link className="lg:text-3xl md:text-2xl text-sm font-semibold">
                    <div >
                        <p className="text-end">المطبعة الرئيسية</p>
                        <p>Prime Printing Press</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex flex-col">
                <ul className="menu menu-horizontal text-lg px-24 font-semibold bg-[#800000] text-white">
                    <li><Link><PhoneIcon className="h-5 w-6" />+968-99364737</Link></li>
                    <li><Link><EnvelopeIcon className="h-5 w-6" />sales@primeprintingpress.com</Link></li>
                </ul>
                <ul className="menu menu-horizontal z-[1] px-1 text-xl font-semibold">
                    {
                        navbarItem
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="lg:text-3xl md:text-2xl text-sm font-semibold">
                    <div>
                        <p className="text-end">العالم الرقمي الأول</p>
                        <p>Prime Digital world</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;